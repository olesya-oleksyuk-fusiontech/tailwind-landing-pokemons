import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Utility function to generate Tailwind CSS classnames
const getCardClasses = (variant: 'available' | 'unavailable'): string => {
  return clsx(
    'flex flex-col items-center',
    'w-2/3 sm:w-5/6',
    'px-2 py-6',
    'border border-solid border-slate-900',
    'rounded-3xl bg-white shadow-xl',
    'dark:border-gray-100 dark:bg-black',
    'transition-transform duration-300 hover:scale-110',
    variant === 'unavailable' && 'opacity-30 grayscale',
  );
};

const Card: React.FC<
  {
    img: {
      src: string | StaticImport;
      alt: string;
    };
    title: string;
    subtitle: string;
    description: string;
    isUnavailable?: boolean;
  } & React.PropsWithChildren
> = (props) => {
  const { img, title, subtitle, description, isUnavailable = false } = props;

  const cardClasses = getCardClasses(
    isUnavailable ? 'unavailable' : 'available',
  );
  return (
    <li className={cardClasses}>
      <Image src={img.src} alt={img.alt} className="mb-6 w-1/2" />
      <h3
        className={clsx(
          'text-center',
          'text-3xl text-slate-900',
          'dark:text-white',
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          'hidden sm:block',
          'mt-2 text-center',
          'text-3xl text-slate-500',
          'dark:text-slate-400',
        )}
      >
        {subtitle}
      </p>
      <p
        className={clsx(
          'sm:hidden',
          'mt-2 text-center',
          'text-2xl text-slate-500 ',
          'dark:text-slate-400',
        )}
      >
        {description}
      </p>
    </li>
  );
};

export default Card;
