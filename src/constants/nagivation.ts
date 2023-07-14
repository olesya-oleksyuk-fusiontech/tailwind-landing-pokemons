export const HEADER = {
  TITLE: '⚡️ Rockets Landing',
  LINK: {
    ROCKETS: {
      name: 'Our Rockets',
      anchor: '#rockets',
    },
    PRACTICE: {
      name: 'Practice',
      anchor: '#practice',
    },
  },
};

export const PRACTICE_OPTIONS = [
  {
    name: 'Pokemon search',
    url: '/pokemons/find',
  },
  {
    name: 'Something else',
    url: '/something-else',
  },
  {
    name: 'Funny observation',
    url: '/funny-observation',
  },
] as const;

export const PRACTICE_NAME_LIST = PRACTICE_OPTIONS.map((i) => i.name);
export const PRACTICE_URL_LIST = PRACTICE_OPTIONS.map((i) => i.url);
