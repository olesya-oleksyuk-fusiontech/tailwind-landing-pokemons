import React from 'react';
import Link from 'next/link';

const HEADER = {
  TITLE: '⚡️ Pokemon Landing',
  LINK: {
    POKEMON: 'Our Pockemons',
    TESTIMONIALS: 'Testimonials',
    CONTACT_US: 'Contact Us',
  },
};

const Footer: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="#hero">
          <h1 className="text-4xl font-medium">{HEADER.TITLE}</h1>
        </Link>
        <div>
          <button className="text-3xl focus:outline-none sm:hidden">
            &#9776;
          </button>
          <nav className="hidden space-x-8 text-xl sm:block" aria-label="main">
            <a href="#pokemons" className="hover:opacity-80">
              {HEADER.LINK.POKEMON}
            </a>
            <a href="#testimonials" className="hover:opacity-80">
              {HEADER.LINK.TESTIMONIALS}
            </a>
            <a href="#contact" className="hover:opacity-80">
              {HEADER.LINK.CONTACT_US}
            </a>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Footer;
