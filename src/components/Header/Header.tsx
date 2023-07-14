import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Dropdown from '@/components/Dropdown';
import { ObjToArr } from '@/utils/functions';

const HEADER = {
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

const Header: React.FC = () => {
  const LINKS_WITH_DROPDOWN = [HEADER.LINK.PRACTICE.name];
  const PRACTICE_DROPDOWN = [
    'Pokemon search',
    'Something else',
    'Funny observation',
  ];
  return (
    <header className={clsx('sticky top-0 z-[1] bg-teal-700 text-white')}>
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="#hero">
          <h1 className="text-4xl font-medium">{HEADER.TITLE}</h1>
        </Link>
        <div>
          <button className="text-3xl focus:outline-none sm:hidden">
            &#9776;
          </button>
          <nav className="hidden space-x-8 text-xl sm:block" aria-label="main">
            {ObjToArr.values(HEADER.LINK).map((link) => {
              return LINKS_WITH_DROPDOWN.includes(link.name) ? (
                <Dropdown
                  options={PRACTICE_DROPDOWN}
                  onOptionSelect={(option) => console.log(option)}
                >
                  <a href={link.anchor} className="hover:opacity-80">
                    {link.name}
                  </a>
                </Dropdown>
              ) : (
                <a href={link.anchor} className="hover:opacity-80">
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
