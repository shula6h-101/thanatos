import { useRouter } from 'next/router';
import { Fragment } from 'react';
import navigationConfig from '../../admin/NavConfig';
import NavBar from '../../components/layout-components/NavBar';
import getRouteInfo from '../../utils';
import MainBanner from '../../components/shared-components/MainBanner';
import About from '../../components/shared-components/About';

export default function Home() {
  const router = useRouter();
  return (
    <Fragment>
      <NavBar
        items={navigationConfig}
        routeInfo={getRouteInfo(navigationConfig, router.pathname)}
      />
      <MainBanner />
      <About />
    </Fragment>
  );
}
