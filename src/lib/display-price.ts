export function displayPrice(price?: number | null): string {
  if (typeof price !== 'number') return '-';

  const formatted = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);

  return formatted;
}
