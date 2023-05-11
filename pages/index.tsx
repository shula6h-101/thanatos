import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('./home'));

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'home',
      permanent: true,
    },
  };
};

export default function MyApp() {
  return <Home />;
}
