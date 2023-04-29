import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { AuthProvider } from '../state/auth/AuthContext';
import '../assets/styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 400,
      delay: 0,
    });
  }, []);
  const getLayout = Component.getLayout || ((page) => page);

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default App;
