const NEXT_PUBLIC_GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
import { HUBSPOT_ID } from "lib/constants";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preload" href="/conversation.js" as="script" />

          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <script
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                debug: true,
                "forward": ["dataLayer.push","gtag"]
              };
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            id="tag-manager"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="worker"
          ></Script>
          <Script src="/analytics.js" id="google-analytics" strategy="worker" />
          <Script id="google-analytics-script" strategy="worker">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', '${NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
          </Script>
          <Script
            src="/conversation.js"
            id="hubspot-messages-loader"
            strategy="lazyOnload"
            data-loader="hs-scriptloader"
            data-hsjs-portal={HUBSPOT_ID}
            data-hsjs-env="prod"
            data-hsjs-hublet="na1"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
