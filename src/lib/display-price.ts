import type { MenuItem } from '@/types/flipdish';

export function displayPrice(item: MenuItem): string {
  const master = item.MenuItemOptionSets?.find(set => set?.IsMasterOptionSet);
  const value = master?.MinPrice ?? item.Price;

  if (typeof value !== 'number') return '-';

  const formatted = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(value);

  return master ? `from ${formatted}` : formatted;
}
