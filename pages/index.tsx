import { GetServerSideProps } from 'next';
import { Fragment } from 'react';
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
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}
