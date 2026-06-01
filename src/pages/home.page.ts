import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly makeAppointmentButton: Locator;
  readonly menuToggle: Locator;
  readonly sidebarLoginLink: Locator;

  constructor(page: Page) {
    super(page);
    this.makeAppointmentButton = page.locator('#btn-make-appointment');
    this.menuToggle = page.locator('#menu-toggle');
    this.sidebarLoginLink = page.getByRole('link', { name: 'Login' });
  }

  async open(): Promise<void> {
    await this.goto('/');
    await expect(this.makeAppointmentButton).toBeVisible();
  }

  async startAppointment(): Promise<void> {
    await this.makeAppointmentButton.click();
  }

  async openLoginFromMenu(): Promise<void> {
    await this.menuToggle.click();
    await this.sidebarLoginLink.click();
  }
}
