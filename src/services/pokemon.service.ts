import { ALL_POKEMON_SPECIES } from '@/services/pokemonSpecies';

export interface IPokemon {
  name: string;
  url: string;
}

export const PokemonService = {
  async getAll(query: string): Promise<IPokemon[]> {
    return new Promise((resolve) => {
      const matchingPokemons = ALL_POKEMON_SPECIES.filter(({ name }) =>
        name.includes(query.toLowerCase()),
      );
      // Artificial timeout for demonstration purposes
      setTimeout(() => {
        resolve(matchingPokemons);
      }, 3000);
    });
  },
};
