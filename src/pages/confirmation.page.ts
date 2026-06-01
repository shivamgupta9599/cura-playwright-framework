import { expect, type Locator, type Page } from '@playwright/test';
import { AppointmentDetails } from './appointment.page';
import { BasePage } from './base.page';

export class ConfirmationPage extends BasePage {
  readonly heading: Locator;
  readonly facility: Locator;
  readonly readmission: Locator;
  readonly program: Locator;
  readonly visitDate: Locator;
  readonly comment: Locator;
  readonly goToHomepageButton: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Appointment Confirmation' });
    this.facility = page.locator('#facility');
    this.readmission = page.locator('#hospital_readmission');
    this.program = page.locator('#program');
    this.visitDate = page.locator('#visit_date');
    this.comment = page.locator('#comment');
    this.goToHomepageButton = page.getByRole('link', { name: 'Go to Homepage' });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async expectDetails(details: AppointmentDetails): Promise<void> {
    await expect(this.facility).toHaveText(details.facility);
    await expect(this.readmission).toHaveText(details.readmission ? 'Yes' : 'No');
    await expect(this.program).toHaveText(details.program);
    await expect(this.visitDate).toHaveText(details.visitDate);
    await expect(this.comment).toHaveText(details.comment);
  }
}
