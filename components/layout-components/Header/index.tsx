import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext, useEffect, useState } from 'react';
import AuthContext from '../../../state/auth/AuthContext';
import NavMenu from '../../shared-components/NavMenu';
import navigationConfig from '../../../admin/NavConfig';
import getRouteInfo from '../../../utils';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const router = useRouter();
  const { authenticated } = useContext(AuthContext);
  const [solidNav, setSolidNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 150) {
        setSolidNav(true);
      } else {
        setSolidNav(false);
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
        solidNav ? 'fixed shadow-md bg-white animate-fade text-gray-900' : 'absolute'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">#LOGO</span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <NavMenu
          items={navigationConfig}
          routeInfo={getRouteInfo(navigationConfig, router.pathname)}
          solidNav={solidNav}
        />
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
              className={`text-md font-semibold leading-6 ${solidNav ? '' : 'text-white'}`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
