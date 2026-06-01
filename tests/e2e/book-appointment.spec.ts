import { appointment } from '../../src/test-data/appointment.data';
import { test } from '../../src/fixtures/pages.fixture';

test.describe('Appointment booking', () => {
  test('@smoke books an appointment and validates confirmation', async ({
    appointmentPage,
    confirmationPage
  }) => {
    await appointmentPage.goto('/#appointment');
    await appointmentPage.expectLoaded();

    await appointmentPage.book(appointment);

    await confirmationPage.expectLoaded();
    await confirmationPage.expectDetails(appointment);
  });
});
