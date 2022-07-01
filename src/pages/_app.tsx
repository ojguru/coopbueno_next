import { Global } from "@emotion/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import globalStyle from "styles/global-styles";
import { AppWrapper } from "context/appContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
