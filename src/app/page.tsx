'use client';

import { MenuItem } from './components/MenuItem';
import { filterItems, filterSections } from '@/lib/filtered-data';
import { useQuery } from '@tanstack/react-query';
import { getMenu } from '../lib/api';

export default function Home() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending)
    return (
      <div className='flex justify-center font-medium text-2xl mt-20'>
        <span>Loading...</span>
      </div>
    );
  if (isError)
    return (
      <div className='flex justify-center font-medium text-2xl mt-20'>
        <span>Error: {error.message}</span>
      </div>
    );

  const sections = filterSections(data.MenuSections ?? []);

  return (
    <main>
      <h1 className='text-3xl font-bold text-center my-6 text-[#0B75D7]'>
        Menu
      </h1>

      {sections.map(section => (
        <section key={section.MenuSectionId} className='mb-10'>
          <h2 className='mb-3 text-lg font-semibold'>{section.Name}</h2>
          <hr className='mb-5 border-gray-200' />
          <div className='grid gap-4 md:grid-cols-2'>
            {filterItems(section.MenuItems ?? []).map(item => {
              const master = item.MenuItemOptionSets?.find(
                set => set.IsMasterOptionSet
              );
              const options = master?.MenuItemOptionSetItems ?? [];
              if (master && options.length > 0) {
                return options.map(option => (
                  <MenuItem
                    key={option?.PublicId}
                    Name={`${item.Name} - ${option.Name}`}
                    Description={item.Description}
                    ImageUrl={option.ImageUrl || item.ImageUrl}
                    Price={option.Price}
                  />
                ));
              }

              return (
                <MenuItem
                  key={item.MenuItemId}
                  Name={item.Name}
                  Description={item.Description}
                  ImageUrl={item.ImageUrl}
                  Price={item.Price}
                />
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
