import type { Menu } from '@/types/flipdish';
import { MenuItem } from './components/MenuItem';

const URL =
  'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json';

export default async function Home() {
  const response = await fetch(URL, { next: { revalidate: 600 } });
  if (!response.ok) throw new Error(`Flipdish ${response.status}`);

  const data = (await response.json()) as Menu;
  const sections = data.MenuSections ?? [];

  return (
    <main>
      <h1 className='text-3xl font-bold text-center my-6 text-[#0B75D7]'>
        Menu
      </h1>

      {sections
        .filter(section => section?.Name && !/test/i.test(section.Name))
        .map(section => (
          <section key={section.MenuSectionId} className='mb-10'>
            <h2 className='mb-3 text-lg font-semibold'>{section.Name}</h2>
            <hr className='mb-5 border-gray-200' />

            <div className='grid gap-4 md:grid-cols-2'>
              {(section.MenuItems ?? [])
                .filter(item => item?.Name && !/test/i.test(item.Name))
                .map(item => (
                  <MenuItem key={item.MenuItemId} item={item} />
                ))}
            </div>
          </section>
        ))}
    </main>
  );
}
