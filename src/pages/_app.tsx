import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import 'modern-css-reset/dist/reset.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
