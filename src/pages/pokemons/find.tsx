import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { POKEMON } from '@/styles/customColors';

const FindPokemonPage = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const pokemonSectionClasses = clsx(
    'flex flex-col items-center justify-center',
    'mx-auto mt-[20vh]',
  );

  const searchPokemonInputClasses = clsx(
    'h-10 px-3 py-1',
    'rounded-xl border outline-0',
  );

  return (
    <>
      <Head>
        <title>Find Pokemon</title>
      </Head>
      <Layout>
        <section className={pokemonSectionClasses}>
          <h1 className="mb-5 text-4xl font-bold">Search Your Pokemon</h1>
          <input
            className={searchPokemonInputClasses}
            type="text"
            onChange={({ target: { value } }) => setSearchValue(value)}
            value={searchValue}
          />
        </section>
      </Layout>
    </>
  );
};

export default FindPokemonPage;
