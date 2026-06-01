# CURA Playwright UI Automation Framework

This is a TypeScript Playwright framework for automating the CURA Healthcare demo site:

https://katalon-demo-cura.herokuapp.com

## Framework Structure

- `playwright.config.ts` - browser projects, retries, reports, traces, screenshots, video, and auth setup.
- `src/config` - environment configuration.
- `src/fixtures` - reusable Playwright fixtures.
- `src/pages` - page object model classes.
- `src/test-data` - reusable test data.
- `src/utils` - helper utilities.
- `tests/setup` - login setup that creates storage state.
- `tests/auth` - authentication tests.
- `tests/e2e` - authenticated end-to-end tests.

## Prerequisites

Node.js and Playwright browsers should be installed on the machine.

PowerShell may block `npm` and `npx` `.ps1` shims. On Windows, use `npm.cmd` and `npx.cmd`.

## Setup

```powershell
cd C:\Users\HP\Documents\Codex\2026-06-01\i-want-to-create-ui-automation\outputs\cura-playwright-framework
npm.cmd install
```

Optional: create a local `.env` file if credentials or URL change.

```powershell
Copy-Item .env.example .env
```

Default values:

```text
BASE_URL=https://katalon-demo-cura.herokuapp.com
CURA_USERNAME=John Doe
CURA_PASSWORD=ThisIsNotAPassword
```

## Run Tests

```powershell
npm.cmd test
```

Run smoke tests:

```powershell
npm.cmd run test:smoke
```

Run headed:

```powershell
npm.cmd run test:headed
```

Debug:

```powershell
npm.cmd run test:debug
```

Open HTML report:

```powershell
npm.cmd run report
```

## Notes

- The `setup` project logs in once and saves browser storage under `.auth/user.json`.
- Authenticated e2e specs reuse that storage state.
- Failed tests keep trace, screenshot, and video artifacts under `test-results`.
