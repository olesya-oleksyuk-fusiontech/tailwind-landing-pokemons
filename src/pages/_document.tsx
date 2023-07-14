import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
