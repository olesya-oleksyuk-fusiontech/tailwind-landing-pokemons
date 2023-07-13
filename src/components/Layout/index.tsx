import React from 'react';
import Header from '@/components/Header';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl">{children}</main>
    </>
  );
};

export default Layout;
