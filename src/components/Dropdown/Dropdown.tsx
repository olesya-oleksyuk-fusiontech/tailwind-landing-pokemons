import React from 'react';
import clsx from 'clsx';

interface DropdownProps<T extends string> {
  options: T[];
  onOptionSelect: (element: T) => void;
}

const generateClassList = (isActive: boolean) => {
  const button = clsx(
    'w-fit justify-center px-4 py-2',
    'rounded-md border-2 border-transparent',
    'transition duration-150 ease-in-out',
    'focus:border-blue-300 focus:shadow-blue-400 focus:outline-none',
    'hover:border-2 hover:border-amber-200 hover:shadow-amber-200 hover:outline-none focus:border',
    'active:text-amber-200',
    isActive && 'border-dashed border-amber-200',
  );

  const container = clsx(
    'absolute left-0 z-[2] origin-center',
    'mt-3 w-56 p-3',
    'bg-white shadow-lg',
    'rounded-md border-2 border-white',
    'text-gray-700',
    isActive && 'block',
    !isActive && 'hidden',
  );

  const item = clsx(
    'block cursor-pointer',
    'rounded-md px-4 py-2',
    'text-base leading-5 text-gray-700',
    'hover:bg-gray-100 hover:text-gray-900',
    'focus:bg-gray-100 focus:text-gray-900 focus:outline-none',
  );

  return {
    button,
    container,
    item,
  };
};

const Dropdown: React.FC<DropdownProps<string> & React.PropsWithChildren> = (
  props,
) => {
  const { options, onOptionSelect, children } = props;

  // Keep track of whether the dropdown is open or not.
  const [isActive, setActive] = React.useState(false);

  const dropdownClasses = generateClassList(isActive);

  return (
    <div className="relative inline">
      <span
        onClick={() => setActive(!isActive)}
        className={dropdownClasses.button}
      >
        {children}
      </span>
      <div className={dropdownClasses.container}>
        {options.map((option) => (
          <ul key={option} onClick={() => onOptionSelect(option)}>
            <li className={dropdownClasses.item}>{option}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
