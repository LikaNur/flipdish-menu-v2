import { displayPrice } from '@/lib/display-price';
import type { MenuItem as FlipdishMenuItem } from '@/types/flipdish';
import Image from 'next/image';

type Props = { item: FlipdishMenuItem };

export function MenuItem({ item }: Props) {
  return (
    <article className='grid grid-cols-[1fr_auto] items-center gap-2 border rounded-xl bg-white border-gray-100 shadow-sm p-4'>
      <div>
        {item.Name && <h1>{item.Name}</h1>}
        {item.Description && (
          <h2 className='text-sm text-gray-500 py-2'>{item.Description}</h2>
        )}
        <p className='mt-1 font-medium'>{displayPrice(item)}</p>
      </div>

      {item.ImageUrl && (
        <div className='relative h-28 w-32 overflow-hidden rounded-2xl'>
          <Image
            src={item.ImageUrl}
            alt={item.Name ?? 'Menu item'}
            width={96}
            height={96}
            draggable='false'
            className='h-full w-full rounded-2xl transition-transform duration-400 hover:scale-110'
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
    </article>
  );
}
