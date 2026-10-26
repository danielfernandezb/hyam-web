import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	test: {
		environment: 'node',
		include: ['src/**/*.test.{js,jsx}'],
		globals: false,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'lcov'],
			include: ['src/**/*.{js,jsx}'],
			exclude: ['src/**/*.test.{js,jsx}', 'src/components/ui/**', 'src/main.jsx'],
			// El umbral se exige sobre los módulos con pruebas unitarias reales.
			// El resto de componentes se cubre con Playwright (e2e), no con unitarios.
			thresholds: {
				'src/lib/format.js': { statements: 100, branches: 90, functions: 100, lines: 100 },
				'src/lib/utils.js': { statements: 100, branches: 100, functions: 100, lines: 100 },
				'src/components/builder/blocks/blogHelpers.js': {
					statements: 95,
					branches: 85,
					functions: 100,
					lines: 95,
				},
			},
		},
	},
});
