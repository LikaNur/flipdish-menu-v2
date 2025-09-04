import { MenuItem } from './../types/flipdish';
import { MenuSection } from '@/types/flipdish';

export function filterSections(sections: MenuSection[]): MenuSection[] {
  return sections.filter(
    section => section?.Name && !/test/i.test(section.Name)
  );
}

export function filterItems(items: MenuItem[]): MenuItem[] {
  return items.filter(item => item?.Name && !/test/i.test(item.Name));
}
