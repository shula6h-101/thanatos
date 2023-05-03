import { Fragment } from 'react';
import MainBanner from '../../components/layout-components/MainBanner';
import About from '../../components/layout-components/About';
import navigationConfig from '../../admin/NavConfig';
import getRouteInfo from '../../utils';
import Index from '../../components/layout-components/NavBar';
import { useRouter } from 'next/router';
import Clients from '../../components/layout-components/Clients';
import Footer from '../../components/layout-components/Footer';

export default function Home() {
  const router = useRouter();
  return (
    <Fragment>
      <Index items={navigationConfig} routeInfo={getRouteInfo(navigationConfig, router.pathname)} />
      <MainBanner />
      <About />
      <Clients />
      <Footer />
    </Fragment>
  );
}
