import React from 'react';
import clsx from 'clsx';
import { statusMessageClasses } from '@/pages/pokemons/find';

const PokemonCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pokemonCardClasses = clsx(
    'flex items-center justify-center gap-2',
    'mt-4 p-2',
    'text-pokemon-dark font-bold capitalize',
    'rounded-2xl border-4 border-white',
  );

  return <div className={pokemonCardClasses}>{children}</div>;
};

const PokemonGrid: React.FC<
  { pokemons: string[] } & React.PropsWithChildren
> = (props) => {
  const { pokemons } = props;

  const pokemonSearchGridClasses = clsx(
    'grid grid-cols-2 gap-2',
    'mt-4 w-[300px]',
  );

  const renderContent = () => {
    if (pokemons.length > 0) {
      return (
        <div className={pokemonSearchGridClasses}>
          {pokemons.map((pokemon) => (
            <PokemonCard>{pokemon}</PokemonCard>
          ))}
        </div>
      );
    }

    return <div className={statusMessageClasses}>No pokemons found</div>;
  };

  return <>{renderContent()}</>;
};

export default PokemonGrid;
