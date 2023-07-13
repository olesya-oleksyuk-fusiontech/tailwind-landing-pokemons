import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const Card: React.FC<
  {
    img: {
      src: string | StaticImport;
      alt: string;
    };
    title: string;
    subtitle: string;
    description: string;
  } & React.PropsWithChildren
> = (props) => {
  const { img, title, subtitle, description } = props;
  return (
    <li
      className={clsx(
        'w-2/3 sm:w-5/6',
        'px-2 py-6',
        'flex flex-col items-center',
        'border border-solid border-slate-900',
        'rounded-3xl bg-white shadow-xl',
        'dark:border-gray-100 dark:bg-black',
      )}
    >
      <Image src={img.src} alt={img.alt} className="mb-6 w-1/2" />
      <h3 className="text-center text-3xl text-slate-900 dark:text-white">
        {title}
      </h3>
      <p
        className={clsx(
          'hidden sm:block',
          'mt-2 text-center text-3xl text-slate-500',
          'dark:text-slate-400',
        )}
      >
        {subtitle}
      </p>
      <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
        {description}
      </p>
    </li>
  );
};

export default Card;
