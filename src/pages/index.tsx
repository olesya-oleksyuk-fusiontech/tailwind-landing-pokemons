import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Layout from '@/components/Layout';
import clsx from 'clsx';
import rocketDab from '../../public/images/rocketdab.png';
import React from 'react';
import Card from '@/components/Card';
import rocketMan from '../../public/images/rocketman.png';
import rocketRide from '../../public/images/rocketride.png';
import rocketLaunch from '../../public/images/rocketlaunch.png';

const inter = Inter({ subsets: ['latin'] });
const siteTitle = 'Pokemon Landing';

const rocketsData = [
  {
    name: 'Explorer',
    price: '$',
    description: 'Affordable Exploration',
    img: {
      src: rocketMan,
      alt: 'Explorer',
    },
  },
  {
    name: 'Adventurer',
    price: '$$',
    description: 'Best Selling Rocket!',
    img: {
      src: rocketRide,
      alt: 'Adventurer',
    },
  },
  {
    name: 'Infinity',
    price: '$$$',
    description: 'Luxury Starship',
    img: {
      src: rocketLaunch,
      alt: 'Infinity',
    },
  },
];

export default function Home() {
  const renderRocketsData = () => {
    return rocketsData.map(({ name, description, price, img }) => (
      <Card title={name} description={description} subtitle={price} img={img} />
    ));
  };

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <section
          id="hero"
          className={clsx(
            'mb-12 scroll-mt-20 p-6',
            'flex flex-col-reverse items-center justify-center gap-8',
            ' sm:flex-row',
          )}
        >
          <article className="sm:w-1/2">
            <h2
              className={clsx(
                'max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white',
                'sm:text-left sm:text-5xl',
              )}
            >
              We Boldy Go{' '}
              <span className="text-indigo-700 dark:text-indigo-300">
                Where No Rocket{' '}
              </span>
              Has Gone Before...
            </h2>
            <p
              className={clsx(
                'mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400',
                'sm:text-left',
              )}
            >
              We're building rockets or the next century today. From the moon to
              Mars, Jupiter and beyond...
            </p>
            <p
              className={clsx(
                'mt-4 max-w-md text-center text-2xl text-slate-400 dark:text-slate-400',
                'sm:text-left',
              )}
            >
              Think Acme Rockets.
            </p>
          </article>
          <Image className="w-1/2" src={rocketDab} alt="Rocket Dab" />
        </section>

        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

        <section id="pokemons" className="my-12 scroll-mt-20 p-6">
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Our Rockets
          </h2>
          <ul
            className={clsx(
              'flex flex-col items-center gap-8 sm:flex-row',
              'mx-auto my-12 list-none',
            )}
          >
            {renderRocketsData()}
          </ul>
        </section>
      </Layout>
    </>
  );
}
