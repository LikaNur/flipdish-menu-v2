import { displayPrice } from '../src/lib/display-price';

describe('displayPrice', () => {
  it('should format valid number as GBP', () => {
    expect(displayPrice(234)).toBe('£234.00');
  });

  it('should return "-" for null/undefined', () => {
    expect(displayPrice(null)).toBe('-');
    expect(displayPrice(undefined)).toBe('-');
  });
});
