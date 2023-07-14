import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';

import Head from 'next/head';
import Layout from '@/components/Layout';
import Card from '@/components/Card';

import rocketDab from '../../public/images/rocketdab.png';
import rocketMan from '../../public/images/rocketman.png';
import rocketRide from '../../public/images/rocketride.png';
import rocketLaunch from '../../public/images/rocketlaunch.png';
import Divider from '@/components/Divider';

const siteTitle = 'Rockets Landing';

const rocketsData = [
  {
    name: 'Explorer',
    price: '$',
    description: 'Affordable Exploration',
    img: {
      src: rocketMan,
      alt: 'Explorer',
    },
    count: 0,
  },
  {
    name: 'Adventurer',
    price: '$$',
    description: 'Best Selling Rocket!',
    img: {
      src: rocketRide,
      alt: 'Adventurer',
    },
    count: 20,
  },
  {
    name: 'Infinity',
    price: '$$$',
    description: 'Luxury Starship',
    img: {
      src: rocketLaunch,
      alt: 'Infinity',
    },
    count: 10,
  },
];

export default function Home() {
  const renderRocketsData = () => {
    return rocketsData.map(({ name, description, price, img, count }) => (
      <Card
        title={name}
        description={description}
        subtitle={price}
        img={img}
        isUnavailable={!count}
      />
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
              Fortune favours{' '}
              <span className="text-indigo-700 dark:text-indigo-300">
                The Bold -{' '}
              </span>
              <br />
              fortis fortuna adiuvat
            </h2>
            <p
              className={clsx(
                'mt-2.5 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400',
                'sm:text-left',
              )}
            >
              Boldness is the beginning of action, but fortune controls how it
              ends
            </p>
            <p
              className={clsx(
                'mt-4 max-w-md text-center text-2xl text-slate-400 dark:text-slate-400',
                'sm:text-left',
              )}
            >
              Think like Democritus.
            </p>
          </article>
          <Image className="w-1/2" src={rocketDab} alt="Rocket Dab" />
        </section>

        <Divider className="w-1/2" />

        <section id="rockets" className="my-12 scroll-mt-20 p-6">
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
