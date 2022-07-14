import { Menu } from '@headlessui/react';
import Link from 'next/link';
import cx from 'classnames';

const { Item } = Menu;

const MenuEntry = ({
  enabled,
  href,
  name,
}: {
  enabled: boolean;
  href: string;
  name: string;
}) => {
  console.log('test');
  return (
    <Item disabled={!enabled}>
      {({ active }) => {
        const classNames = cx('w-full', 'p-2', 'rounded-lg', 'mt-2', 'mb-2', {
          'opacity-50': !enabled,
          'bg-blue-600': active,
          'text-white': active,
        });

        return (
          <Link href={href} passHref>
            <a className={classNames}>{name}</a>
          </Link>
        );
      }}
    </Item>
  );
};

export default MenuEntry;
