import { Global } from "@emotion/react";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import globalStyle from "styles/global-styles";
import { AppWrapper } from "context/appContext";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { HUBSPOT_ID, SITE_NAME, SITE_URL } from "lib/constants";
import { useRouter } from "next/router";
import { event } from "nextjs-google-analytics";
import { useEffect } from "react";

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

  useEffect(() => {
    const hsChat = async () => {
      window.eval(`
      !function(t, e, r) {
        if (!document.getElementById(t)) {
            var n = document.createElement("script");
            for (var a in n.src = "https://js.usemessages.com/conversations-embed.js",
            n.type = "text/javascript",
            n.id = t,
            r)
                r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(n, i)
        }
        removeEventListener("scroll", ()=>{});
        removeEventListener("click", ()=>{});
    }("hubspot-messages-loader", 0, {
        "data-loader": "hs-scriptloader",
        "data-hsjs-portal": ${HUBSPOT_ID},
        "data-hsjs-env": "prod",
        "data-hsjs-hublet": "na1"
    });
    `);
    };

    setTimeout(() => {
      hsChat();
    }, 3000);
    addEventListener("scroll", hsChat);
    addEventListener("click", hsChat);
  }, []);
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
