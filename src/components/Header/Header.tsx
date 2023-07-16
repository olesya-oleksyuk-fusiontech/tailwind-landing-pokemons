import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

import Dropdown from '@/components/Dropdown';
import { ObjToArr } from '@/utils/functions';
import {
  HEADER,
  PRACTICE_NAME_LIST,
  PRACTICE_OPTIONS,
  PRACTICE_URL_LIST,
} from '@/constants/nagivation';

type PracticeType = (typeof PRACTICE_NAME_LIST)[number];

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const LINKS_WITH_DROPDOWN = [HEADER.LINK.PRACTICE.name];
  const PRACTICE_NAME_LIST = PRACTICE_OPTIONS.map((i) => i.name);

  const selectPracticeHandler = (option: PracticeType) => {
    const selectedLink = PRACTICE_OPTIONS.find((i) => i.name === option)?.url;
    if (!selectedLink) return;
    router.push(selectedLink);
  };

  return (
    <header className={clsx('sticky top-0 z-[1] bg-teal-700 text-white')}>
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link href="/#hero">
          <h1 className="text-4xl font-medium">{HEADER.TITLE}</h1>
        </Link>
        <div>
          <button className="text-3xl focus:outline-none sm:hidden">
            &#9776;
          </button>
          <nav className="hidden space-x-8 text-xl sm:block" aria-label="main">
            {ObjToArr.values(HEADER.LINK).map((link) => {
              const isLinkWithDropdown = LINKS_WITH_DROPDOWN.includes(
                link.name,
              );
              const startsWithPrefix = PRACTICE_URL_LIST.some((url) =>
                pathname.startsWith(url),
              );

              const isActiveLink = isLinkWithDropdown && startsWithPrefix;

              return LINKS_WITH_DROPDOWN.includes(link.name) ? (
                <Dropdown
                  options={PRACTICE_NAME_LIST}
                  onOptionSelect={(option: string) =>
                    selectPracticeHandler(option as PracticeType)
                  }
                  isSelected={isActiveLink}
                >
                  <a className="cursor-pointer hover:opacity-80">{link.name}</a>
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
