import { test } from '@playwright/test';
import { env } from '../../src/config/env';
import { HomePage } from '../../src/pages/home.page';
import { LoginPage } from '../../src/pages/login.page';
import { AppointmentPage } from '../../src/pages/appointment.page';

test('authenticate user', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const appointmentPage = new AppointmentPage(page);

  await homePage.open();
  await homePage.startAppointment();
  await loginPage.expectLoaded();
  await loginPage.login(env.username, env.password);
  await appointmentPage.expectLoaded();
  await page.context().storageState({ path: env.storageStatePath });
});
