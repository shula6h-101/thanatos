import { FC } from 'react';
import Popup from './Popup';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { SingleNavItem } from '../../types';

interface NavMenuProps {
  items: SingleNavItem[];
  routeInfo: SingleNavItem | undefined;
  solidNav: boolean;
}

const NavMenu: FC<NavMenuProps> = ({ items, routeInfo, solidNav }: NavMenuProps) => {
  return (
    <div className="hidden md:flex md:gap-x-12">
      {items.map((item) =>
        item.nestedMenu ? (
          <Popup
            key={item.key}
            solidNav={solidNav}
            component={
              <div className="flex flex-col">
                {item.nestedMenu.map((nestedItem) => {
                  return (
                    <Link key={nestedItem.key} href={nestedItem.path}>
                      <div
                        className={
                          routeInfo?.key === nestedItem.key
                            ? 'bg-primary text-white'
                            : 'text-gray-900'
                        }
                      >
                        {nestedItem.label}
                      </div>
                    </Link>
                  );
                })}
              </div>
            }
          >
            {item.label}
            <FontAwesomeIcon className="mx-1" icon={faChevronDown} size="xs" />
          </Popup>
        ) : (
          <Link
            key={item.key}
            href={item.path}
            className={`font-semibold leading-6 ${
              routeInfo?.key === item.key ? 'text-primary' : solidNav ? '' : 'text-white'
            }`}
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
};

export default NavMenu;
