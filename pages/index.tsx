import { GetServerSideProps } from 'next';
import Home from './home';

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
