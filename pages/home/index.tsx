import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/layout-components/Layout'));
const MainBanner = dynamic(() => import('../../components/layout-components/MainBanner'));
const About = dynamic(() => import('../../components/layout-components/About'));
const Clients = dynamic(() => import('../../components/layout-components/Clients'));

export default function Home() {
  return (
    <Layout>
      <MainBanner />
      <About />
      <Clients />
    </Layout>
  );
}
