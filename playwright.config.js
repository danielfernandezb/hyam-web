import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 2 : undefined,
	reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : [['list']],
	timeout: 30_000,
	expect: { timeout: 8_000 },

	use: {
		baseURL: BASE_URL,
		trace: 'on-first-retry',
		screenshot: 'only-on-failure',
		video: 'retain-on-failure',
	},

	projects: [
		{
			name: 'escritorio',
			use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 900 } },
		},
		{
			name: 'movil',
			use: { ...devices['Pixel 5'] },
		},
	],

	webServer: {
		command: `npx vite preview --outDir dist --port ${PORT} --strictPort`,
		url: BASE_URL,
		reuseExistingServer: !process.env.CI,
		timeout: 60_000,
		stdout: 'ignore',
		stderr: 'pipe',
	},
});
