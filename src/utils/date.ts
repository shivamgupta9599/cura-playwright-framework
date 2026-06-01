export function formatDateForCura(daysFromToday: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
}
