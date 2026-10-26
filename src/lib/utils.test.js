import { describe, expect, it } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn', () => {
	it('combina clases', () => {
		expect(cn('flex', 'items-center')).toBe('flex items-center');
	});

	it('resuelve conflictos de Tailwind quedándose con la última', () => {
		expect(cn('p-2', 'p-4')).toBe('p-4');
		expect(cn('text-white', 'text-[#d2a24a]')).toBe('text-[#d2a24a]');
	});

	it('ignora valores falsy', () => {
		expect(cn('flex', false, null, undefined, '')).toBe('flex');
	});
});
