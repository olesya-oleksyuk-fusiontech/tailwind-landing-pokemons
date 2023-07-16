import { Html, Head, Main, NextScript } from 'next/document';
import clsx from 'clsx';

export default function Document() {
  const bodyClasses = clsx(
    'no-scrollbar min-h-screen',
    'bg-slate-50',
    'dark:bg-black dark:text-white',
  );

  return (
    <Html lang="en">
      <Head />
      <body className={bodyClasses}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
