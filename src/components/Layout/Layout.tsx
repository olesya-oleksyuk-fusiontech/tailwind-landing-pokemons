import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import { POKEMON } from '@/styles/customColors';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === '/pokemons/find') {
      document.body.style.backgroundColor = POKEMON.pokemon.DEFAULT;
    }
    return () => {
      document.body.style.backgroundColor = ''; // Reset the body color
    };
  }, []);

  const mainClasses = clsx('mx-auto max-w-4xl');

  return (
    <>
      <Header />
      <main className={mainClasses}>{children}</main>
    </>
  );
};

export default Layout;
