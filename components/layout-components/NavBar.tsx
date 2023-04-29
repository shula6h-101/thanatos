import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../state/auth/AuthContext';
import { SingleNavItem } from '../../types';

interface NavbarProps {
  items: SingleNavItem[];
  routeInfo: SingleNavItem | undefined;
}

const NavBar: React.FC<NavbarProps> = ({ items, routeInfo }: NavbarProps) => {
  const { authenticated } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 150) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full max-[767px]:bg-white z-[999] transition-transform duration-600 transform ease-in ${
        showNav ? 'fixed shadow-md bg-white animate-fade text-gray-900' : 'absolute'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`text-md font-semibold leading-6 ${
                routeInfo?.id === item.id ? 'text-primary' : showNav ? '' : 'text-white'
              }`}
            >
              {item.name}
              {item.nestedMenu && (
                <FontAwesomeIcon className="mx-1" icon={faChevronDown} size="xs" />
              )}
            </Link>
          ))}
        </div>
        {authenticated ? (
          <Image
            className="w-10 h-10 rounded-full md:justify-end cursor-pointer"
            width={300}
            height={300}
            src="/../public/assets/images/profile1.jpg"
            alt="user profile"
          />
        ) : (
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <Link
              href="#"
              className={`text-md font-semibold leading-6 ${showNav ? '' : 'text-white'}`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
