import React from 'react';
import { useQuery } from 'react-query';
import Head from 'next/head';
import clsx from 'clsx';

import PokemonGrid from '@/components/PokemonGrid';
import Layout from '@/components/Layout';
import useDebounce from '@/hooks/useDebounce';
import { PokemonService } from '@/services/pokemon.service';

export const statusMessageClasses = clsx('mt-4', 'text-[18px] font-bold');

const FindPokemonPage = () => {
  const [searchValue, setSearchValue] = React.useState('');
  // don't make a request for every keystroke
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const {
    isLoading,
    isError,
    isSuccess,
    data: pokemonData,
  } = useQuery(
    ['searchPokemons', debouncedSearchValue],
    () => PokemonService.getAll(debouncedSearchValue),
    {
      enabled: debouncedSearchValue.length > 0,
      select: (data) => data.map((i) => i.name),
    },
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className={statusMessageClasses}>Loading...</div>;
    }
    if (isError) {
      return <div className={statusMessageClasses}>Something went wrong</div>;
    }
    if (isSuccess) {
      return <PokemonGrid pokemons={pokemonData} />;
    }
    return <></>;
  };

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
          {renderResult()}
        </section>
      </Layout>
    </>
  );
};

export default FindPokemonPage;
