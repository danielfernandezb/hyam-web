import { describe, expect, it } from 'vitest';
import {
	getFormattedNumericDate,
	isVisibleBlogPost,
	matchesLocalBlogSearch,
	sortBlogPostsNewestFirst,
	startOfDayTimestamp,
} from './blogHelpers';

const localDate = (year, month, day) => new Date(year, month - 1, day, 12, 0, 0).getTime();

describe('getFormattedNumericDate', () => {
	it('formatea en formato en-US', () => {
		expect(getFormattedNumericDate('2026-01-15T12:00:00')).toBe('1/15/2026');
	});

	it('devuelve cadena vacía para fechas inválidas', () => {
		expect(getFormattedNumericDate(null)).toBe('');
		expect(getFormattedNumericDate('ayer')).toBe('');
	});
});

describe('startOfDayTimestamp', () => {
	it('normaliza a medianoche local', () => {
		const ts = startOfDayTimestamp('2026-03-10T18:45:00');
		const d = new Date(ts);
		expect(d.getHours()).toBe(0);
		expect(d.getMinutes()).toBe(0);
		expect(d.getDate()).toBe(10);
	});

	it('devuelve null si la fecha no es válida', () => {
		expect(startOfDayTimestamp('sin-fecha')).toBeNull();
	});
});

describe('isVisibleBlogPost', () => {
	const now = localDate(2026, 6, 15);

	it('oculta posts inexistentes o borradores', () => {
		expect(isVisibleBlogPost(null, now)).toBe(false);
		expect(isVisibleBlogPost({ isDraft: true, date: '2026-01-01' }, now)).toBe(false);
	});

	it('muestra posts no programados', () => {
		expect(isVisibleBlogPost({ isScheduled: false, date: '2030-01-01' }, now)).toBe(true);
	});

	it('muestra programados cuya fecha ya pasó', () => {
		expect(isVisibleBlogPost({ isScheduled: true, date: '2026-06-01' }, now)).toBe(true);
	});

	it('oculta programados en el futuro', () => {
		expect(isVisibleBlogPost({ isScheduled: true, date: '2026-12-01' }, now)).toBe(false);
	});

	it('oculta programados con fecha inválida', () => {
		expect(isVisibleBlogPost({ isScheduled: true, date: 'pronto' }, now)).toBe(false);
	});
});

describe('sortBlogPostsNewestFirst', () => {
	it('ordena de más nuevo a más viejo', () => {
		const posts = [
			{ id: 'viejo', date: '2026-01-01T12:00:00' },
			{ id: 'nuevo', date: '2026-05-01T12:00:00' },
			{ id: 'medio', date: '2026-03-01T12:00:00' },
		];
		expect(sortBlogPostsNewestFirst(posts).map((p) => p.id)).toEqual(['nuevo', 'medio', 'viejo']);
	});

	it('deja al final los posts sin fecha válida', () => {
		const posts = [
			{ id: 'sin-fecha', date: 'n/d' },
			{ id: 'con-fecha', date: '2026-02-01T12:00:00' },
		];
		expect(sortBlogPostsNewestFirst(posts).map((p) => p.id)).toEqual(['con-fecha', 'sin-fecha']);
	});

	it('mantiene el orden original ante fechas iguales', () => {
		const posts = [
			{ id: 'a', date: '2026-02-01T12:00:00' },
			{ id: 'b', date: '2026-02-01T12:00:00' },
		];
		expect(sortBlogPostsNewestFirst(posts).map((p) => p.id)).toEqual(['a', 'b']);
	});

	it('no muta el arreglo original', () => {
		const posts = [{ id: 'x', date: '2026-02-01T12:00:00' }];
		sortBlogPostsNewestFirst(posts);
		expect(posts.map((p) => p.id)).toEqual(['x']);
	});
});

describe('matchesLocalBlogSearch', () => {
	const post = {
		meta: {
			title: 'Hamburguesa ahumada',
			description: 'Especialidades de la casa',
		},
	};

	it('sin término devuelve todo', () => {
		expect(matchesLocalBlogSearch(post, '')).toBe(true);
		expect(matchesLocalBlogSearch(post, '   ')).toBe(true);
	});

	it('busca en título y descripción sin distinguir mayúsculas', () => {
		expect(matchesLocalBlogSearch(post, 'AHUMADA')).toBe(true);
		expect(matchesLocalBlogSearch(post, 'especialidades')).toBe(true);
	});

	it('devuelve false cuando no hay coincidencia', () => {
		expect(matchesLocalBlogSearch(post, 'pizza')).toBe(false);
	});
});
