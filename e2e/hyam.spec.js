import { expect, test } from '@playwright/test';

const WHATSAPP = 'https://wa.me/573160538877';
const SECCIONES = ['inicio', 'historia', 'creaciones', 'especialidades', 'galeria', 'contacto'];
const PNG_1X1 = Buffer.from(
	'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg==',
	'base64'
);

test.beforeEach(async ({ page }) => {
	// Las fotos viven en un CDN externo: se sustituyen por un pixel para que
	// las pruebas sean herméticas y no dependan de la red ni del CDN.
	await page.route('https://images.hostinger.com/**', (route) =>
		route.fulfill({ status: 200, contentType: 'image/png', body: PNG_1X1 })
	);
});

test.describe('hero', () => {
	test('conserva el titular exacto', async ({ page }) => {
		await page.goto('/');
		const h1 = page.getByRole('heading', { level: 1 });
		await expect(h1).toBeVisible();
		await expect(h1).toContainText('MÁS QUE COMIDA.');
		await expect(h1).toContainText('UNA EXPERIENCIA.');
	});

	test('hay un solo h1 y la bajada describe la propuesta', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('h1')).toHaveCount(1);
		await expect(page.getByText('Sabores creados para sorprender.', { exact: false })).toBeVisible();
	});

	test('el CTA de WhatsApp apunta al número correcto', async ({ page }) => {
		await page.goto('/');
		const cta = page.getByRole('link', { name: /Pedir por WhatsApp/i }).first();
		await expect(cta).toBeVisible();
		await expect(cta).toHaveAttribute('href', new RegExp(`^${WHATSAPP}`));
		await expect(cta).toHaveAttribute('target', '_blank');
		await expect(cta).toHaveAttribute('rel', /noopener/);
	});

	test('"Ver experiencias" lleva a especialidades', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('link', { name: /Ver experiencias/i }).click();
		await expect(page).toHaveURL(/#especialidades$/);
		await expect(page.locator('section#especialidades')).toBeVisible();
	});
});

test.describe('estructura y anclas', () => {
	test('todas las secciones del menú existen', async ({ page }) => {
		await page.goto('/');
		for (const id of SECCIONES) {
			await expect(page.locator(`[id="${id}"]`), `falta la sección #${id}`).toHaveCount(1);
		}
		// CONTACTO es el pie de página: un landmark, no una sección más.
		await expect(page.locator('footer#contacto')).toHaveCount(1);
	});

	test('ningún enlace interno queda roto', async ({ page }) => {
		await page.goto('/');
		const anclas = await page.locator('a[href^="#"]').evaluateAll((enlaces) =>
			[...new Set(enlaces.map((a) => a.getAttribute('href')))]
		);
		expect(anclas.length).toBeGreaterThan(0);
		for (const ancla of anclas) {
			const id = ancla.slice(1);
			await expect(page.locator(`[id="${id}"]`), `ancla huérfana: ${ancla}`).toHaveCount(1);
		}
	});

	test('todas las imágenes tienen texto alternativo', async ({ page }) => {
		await page.goto('/');
		const sinAlt = await page.locator('img').evaluateAll((imgs) =>
			imgs.filter((img) => !img.getAttribute('alt')?.trim()).map((img) => img.getAttribute('src'))
		);
		expect(sinAlt).toEqual([]);
	});

	test('no desborda horizontalmente en el ancho del viewport', async ({ page }) => {
		await page.goto('/');
		const desborde = await page.evaluate(
			() => document.documentElement.scrollWidth - window.innerWidth
		);
		expect(desborde).toBeLessThanOrEqual(1);
	});
});

test.describe('metadatos y consola', () => {
	test('el documento expone título, descripción, idioma y Open Graph', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/HYAM/i);

		const meta = await page.evaluate(() => ({
			lang: document.documentElement.lang,
			description: document.querySelector('meta[name="description"]')?.content ?? '',
			ogTitle: document.querySelector('meta[property="og:title"]')?.content ?? '',
			ogImage: document.querySelector('meta[property="og:image"]')?.content ?? '',
			ogImageWidth: document.querySelector('meta[property="og:image:width"]')?.content ?? '',
			ogImageHeight: document.querySelector('meta[property="og:image:height"]')?.content ?? '',
			twitterCard: document.querySelector('meta[name="twitter:card"]')?.content ?? '',
			canonical: document.querySelector('link[rel="canonical"]')?.href ?? '',
			viewport: document.querySelector('meta[name="viewport"]')?.content ?? '',
		}));

		expect(meta.lang).toBe('es');
		expect(meta.viewport).toContain('width=device-width');
		expect(meta.description.length).toBeGreaterThan(40);
		expect(meta.ogTitle).not.toBe('');
		expect(meta.ogImage).toMatch(/^https:\/\/hyamfood\.com\/.+\.(jpg|png)$/);
		expect(meta.ogImageWidth).toBe('1200');
		expect(meta.ogImageHeight).toBe('630');
		expect(meta.twitterCard).toBe('summary_large_image');
		expect(meta.canonical).toBe('https://hyamfood.com/');
	});

	test('no hay errores de JavaScript en la carga', async ({ page }) => {
		const errores = [];
		page.on('pageerror', (error) => errores.push(error.message));
		page.on('console', (msg) => {
			if (msg.type() === 'error') errores.push(msg.text());
		});

		await page.goto('/');
		await page.waitForLoadState('networkidle');
		await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

		expect(errores, `errores en consola:\n${errores.join('\n')}`).toEqual([]);
	});
});
