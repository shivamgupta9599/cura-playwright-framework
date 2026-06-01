import { test as base } from '@playwright/test';
import { AppointmentPage } from '../pages/appointment.page';
import { ConfirmationPage } from '../pages/confirmation.page';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

type PageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  appointmentPage: AppointmentPage;
  confirmationPage: ConfirmationPage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  appointmentPage: async ({ page }, use) => {
    await use(new AppointmentPage(page));
  },
  confirmationPage: async ({ page }, use) => {
    await use(new ConfirmationPage(page));
  }
});

export { expect } from '@playwright/test';
