import { expect, test } from '@playwright/test';

const ENLACES = ['INICIO', 'HISTORIA', 'CREACIONES', 'ESPECIALIDADES', 'GALERÍA', 'CONTACTO'];

test.describe('menú móvil', () => {
	test.skip(({ isMobile }) => !isMobile, 'solo aplica al viewport móvil');

	test('abre, navega y se cierra al elegir una sección', async ({ page }) => {
		await page.goto('/');

		const boton = page.getByRole('button', { name: 'Abrir menú' });
		await expect(boton).toBeVisible();

		await boton.click();

		for (const texto of ENLACES) {
			await expect(page.getByRole('link', { name: texto, exact: true }).last()).toBeVisible();
		}

		await page.getByRole('link', { name: 'GALERÍA', exact: true }).last().click();

		await expect(page).toHaveURL(/#galeria$/);
		await expect(page.locator('section#galeria')).toBeVisible();
		// Al navegar, el panel se cierra: los enlaces del menú dejan de estar expuestos.
		await expect(page.getByRole('link', { name: 'CONTACTO', exact: true })).toHaveCount(0);
	});

	test('el CTA de WhatsApp sigue accesible en móvil', async ({ page }) => {
		await page.goto('/');
		const cta = page.getByRole('link', { name: /Pedir por WhatsApp/i }).first();
		await expect(cta).toBeVisible();
		await expect(cta).toBeInViewport();
	});
});
