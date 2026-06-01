import { env } from '../../src/config/env';
import { expect, test } from '../../src/fixtures/pages.fixture';

test.describe('Authentication', () => {
  test('@smoke logs in with valid credentials', async ({ homePage, loginPage, appointmentPage }) => {
    await homePage.open();
    await homePage.startAppointment();

    await loginPage.expectLoaded();
    await loginPage.login(env.username, env.password);

    await appointmentPage.expectLoaded();
    await expect(appointmentPage.heading).toHaveText('Make Appointment');
  });

  test('shows an error for invalid credentials', async ({ homePage, loginPage }) => {
    await homePage.open();
    await homePage.startAppointment();

    await loginPage.expectLoaded();
    await loginPage.login('invalid-user', 'invalid-password');

    await loginPage.expectLoginFailed();
  });
});
