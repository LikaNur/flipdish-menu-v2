import { displayPrice } from '@/lib/display-price';
import type { MenuItem as FlipdishMenuItem } from '@/types/flipdish';
import Image from 'next/image';

export function MenuItem({
  Name,
  Description,
  ImageUrl,
  Price,
}: FlipdishMenuItem) {
  return (
    <article className='grid grid-cols-[1fr_auto] items-center gap-2 border rounded-xl bg-white border-gray-100 shadow-sm p-4'>
      <div>
        {Name && <h1>{Name}</h1>}
        {Description && (
          <h2 className='text-sm text-gray-500 py-2'>{Description}</h2>
        )}
        <p className='mt-1 font-medium'>{displayPrice(Price)}</p>
      </div>

      {ImageUrl && (
        <div className='relative h-28 w-32 overflow-hidden rounded-2xl'>
          <Image
            src={ImageUrl}
            alt={Name ?? 'Menu item'}
            width={96}
            height={96}
            loading='lazy'
            draggable={false}
            className='h-full w-full rounded-2xl transition-transform duration-400 hover:scale-110'
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
    </article>
  );
}
