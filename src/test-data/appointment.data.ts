import { formatDateForCura } from '../utils/date';

export const appointment = {
  facility: 'Seoul CURA Healthcare Center',
  readmission: true,
  program: 'Medicaid',
  visitDate: formatDateForCura(30),
  comment: 'Automated appointment booking from Playwright framework.'
} as const;
