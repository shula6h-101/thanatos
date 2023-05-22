import Layout from '../../components/layout-components/Layout';
import MainBanner from '../../components/layout-components/MainBanner';
import About from '../../components/layout-components/About';
import Clients from '../../components/layout-components/Clients';

export default function Home() {
  return (
    <Layout>
      <MainBanner />
      <About />
      <Clients />
    </Layout>
  );
}
