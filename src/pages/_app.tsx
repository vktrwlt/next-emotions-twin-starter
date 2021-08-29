import { AppProps } from 'next/app';
import GlobalStyles from '@theme/GlobalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
