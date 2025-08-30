import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <a
        href='https://www.flipdish.com/gb'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Flipdish Website'
      >
        <Image
          src='/flipdish-logo.svg'
          alt='Flipdish Logo'
          draggable='false'
          width={135}
          height={40}
          style={{ objectFit: 'cover' }}
        />
      </a>
    </header>
  );
}
