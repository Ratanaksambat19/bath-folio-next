import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      // offset: 500,
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
