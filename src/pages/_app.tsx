import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { StateContextProvider } from "../context/StateContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Covid Graphics</title>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
