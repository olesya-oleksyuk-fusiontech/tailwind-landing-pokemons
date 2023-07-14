import React from 'react';
import clsx from 'clsx';

const Divider: React.FC<
  {
    className: string;
  } & React.PropsWithChildren<React.HTMLProps<HTMLHRElement>>
> = (props) => {
  const { className, ...other } = props;
  return (
    <hr
      className={clsx('mx-auto bg-black dark:bg-white', className)}
      {...other}
    />
  );
};

export default Divider;
