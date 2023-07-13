import React from 'react';
import Header from '@/components/Header';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
