import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === '/pokemons/find') {
      document.body.classList.add('bg-pokemon');
    }
    return () => {
      document.body.classList.remove('bg-pokemon'); // Reset the body color
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
