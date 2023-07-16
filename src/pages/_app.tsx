import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
  /* Note: Apart from running the above code on the client, Next.js runs it on the server as well.
   * That's why we keep QueryClient instance inside React state =>
   *  this ensure that data is not shared between different users and requests =>
   * QueryClient is created once per component lifecycle */

  // to be globally in our app (allows the queries to interact with the cache)
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
