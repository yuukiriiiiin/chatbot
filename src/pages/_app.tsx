import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../../styles/globals.css';
import 'modern-css-reset/dist/reset.min.css';
import { useStore } from '../redux/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
