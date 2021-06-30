import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';

import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';

export default function CustomApp({ Component, pageProps }) {
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);

  return <Component {...pageProps} />;
}
