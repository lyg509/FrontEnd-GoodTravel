import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import theme from '../styles/theme';
import 'antd/dist/antd.css';
import Head from 'next/head';
import { configureStore } from '../store/configureStore';

declare global {
  // 카카오 map
  interface Window {
    kakao: any;
  }
}

const store = configureStore();
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>여행어때</title>
          <meta
            name="keywords"
            content="search, 검색, 여행어때, Test, click"
          />
          <meta name="description" content="여행어때 관광 사이트"></meta>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;