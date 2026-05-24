import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        headless: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        // Додатковий браузер для завдання 3
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        // Мобільна версія для завдання 3
        {
            name: 'mobile-chrome',
            use: { ...devices['iPhone 12'] },
        }
    ],
    webServer: {
        command: 'npm run start',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
    },
});