import { filterSections, filterItems } from '../src/lib/filtered-data';

describe('filterSections()', () => {
  it('should filter test sections', () => {
    const sections = [{ Name: 'Pizza' }, { Name: 'Test section' }];
    expect(filterSections(sections)).toEqual([{ Name: 'Pizza' }]);
  });
});

describe('filterItems()', () => {
  it('should filter test items', () => {
    const items = [{ Name: 'Beer' }, { Name: 'Test items' }];
    expect(filterItems(items)).toEqual([{ Name: 'Beer' }]);
  });
});
