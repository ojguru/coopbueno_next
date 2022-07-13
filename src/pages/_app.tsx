import { Global } from "@emotion/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import globalStyle from "styles/global-styles";
import { AppWrapper } from "context/appContext";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { SITE_NAME } from "lib/constants";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Global styles={globalStyle} />
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NextSeo
          title="Apoyando tus sueños"
          titleTemplate={`%s - ${SITE_NAME}`}
          defaultTitle="Apoyando tus sueños"
          description="Apoyando tus sueños"
          canonical="https://coopbueno.com.do/"
          openGraph={{
            url: "https://coopbueno.com.do/",
            title: SITE_NAME,
            description: "Apoyando tus sueños",
            images: [
              {
                url: "/og-image.png",
                width: 800,
                height: 420,
                alt: `${SITE_NAME} - apoyando tus sueños`,
              },
            ],
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />

        <Component {...pageProps} />
      </>
    </AppWrapper>
  );
}

export default MyApp;
