import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export type AppointmentDetails = {
  facility: string;
  readmission: boolean;
  program: 'Medicare' | 'Medicaid' | 'None';
  visitDate: string;
  comment: string;
};

export class AppointmentPage extends BasePage {
  readonly heading: Locator;
  readonly facilitySelect: Locator;
  readonly readmissionCheckbox: Locator;
  readonly visitDateInput: Locator;
  readonly commentInput: Locator;
  readonly bookAppointmentButton: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Make Appointment' });
    this.facilitySelect = page.locator('#combo_facility');
    this.readmissionCheckbox = page.locator('#chk_hospotal_readmission');
    this.visitDateInput = page.locator('#txt_visit_date');
    this.commentInput = page.locator('#txt_comment');
    this.bookAppointmentButton = page.locator('#btn-book-appointment');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async book(details: AppointmentDetails): Promise<void> {
    await this.facilitySelect.selectOption(details.facility);
    await this.readmissionCheckbox.setChecked(details.readmission);
    await this.page.locator(`input[name="programs"][value="${details.program}"]`).check();
    await this.visitDateInput.evaluate((element, value) => {
      const input = element as HTMLInputElement;
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, details.visitDate);
    await this.page.keyboard.press('Escape');
    await this.commentInput.fill(details.comment);
    await this.bookAppointmentButton.click();
  }
}
