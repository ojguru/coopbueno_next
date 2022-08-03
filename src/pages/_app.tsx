import { Global } from "@emotion/react";
// import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import globalStyle from "styles/global-styles";
import { AppWrapper } from "context/appContext";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { SITE_NAME, SITE_URL } from "lib/constants";
import { useRouter } from "next/router";
import { GoogleAnalytics, usePageViews, event } from "nextjs-google-analytics";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  event(metric.name, {
    category:
      metric.label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(
      metric.name === "CLS" ? metric.value * 1000 : metric.value
    ), // values must be integers
    label: metric.id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  usePageViews();

  return (
    <AppWrapper>
      <Global styles={globalStyle} />
      <>
        <Head>
          <link rel="preload" href="/favicon.ico" as="icon" />
        </Head>
        <GoogleAnalytics strategy="afterInteractive" />
        <NextSeo
          title="Apoyando tus sueños"
          titleTemplate={`%s - ${SITE_NAME}`}
          defaultTitle="Apoyando tus sueños"
          description="Apoyando tus sueños"
          canonical={`${SITE_URL}${router.asPath}`}
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
