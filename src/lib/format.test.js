import { describe, expect, it } from 'vitest';
import { formatCurrency, formatDate, formatNumber, slugify, truncate } from '@/lib/format';

describe('formatCurrency', () => {
	it('usa USD por defecto', () => {
		expect(formatCurrency(1234.5, { locale: 'en-US' })).toBe('$1,234.50');
	});

	it('respeta moneda y opciones', () => {
		const cop = formatCurrency(1000, { currency: 'COP', locale: 'es-CO', maximumFractionDigits: 0 });
		expect(cop).toContain('1.000');
	});

	it('trata valores vacíos como cero', () => {
		expect(formatCurrency(null, { locale: 'en-US' })).toBe('$0.00');
		expect(formatCurrency(undefined, { locale: 'en-US' })).toBe('$0.00');
	});
});

describe('formatNumber', () => {
	it('agrupa miles según el locale', () => {
		expect(formatNumber(1234.56, { locale: 'en-US' })).toBe('1,234.56');
	});

	it('trata valores vacíos como cero', () => {
		expect(formatNumber('', { locale: 'en-US' })).toBe('0');
	});
});

describe('formatDate', () => {
	it('formatea fechas válidas', () => {
		expect(formatDate('2026-10-26T12:00:00', { locale: 'en-US' })).toBe('October 26, 2026');
	});

	it('devuelve cadena vacía con fechas inválidas o ausentes', () => {
		expect(formatDate(null)).toBe('');
		expect(formatDate('no-es-fecha')).toBe('');
	});
});

describe('truncate', () => {
	it('devuelve el texto intacto si cabe', () => {
		expect(truncate('Hola', 10)).toBe('Hola');
	});

	it('recorta y añade elipsis', () => {
		expect(truncate('Hamburguesa ahumada', 10)).toBe('Hamburgues…');
	});

	it('devuelve cadena vacía si no hay texto', () => {
		expect(truncate('')).toBe('');
		expect(truncate(null)).toBe('');
	});
});

describe('slugify', () => {
	it('quita acentos y normaliza separadores', () => {
		expect(slugify('Más Que Comida, Una Experiencia!')).toBe('mas-que-comida-una-experiencia');
	});

	it('colapsa espacios y guiones repetidos', () => {
		expect(slugify('  HYAM   --   Cartagena  ')).toBe('hyam-cartagena');
	});

	it('tolera valores vacíos', () => {
		expect(slugify(null)).toBe('');
	});
});
