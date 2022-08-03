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

          <link rel="preload" href="/conversation.js" as="script"></link>
          <link
            rel="preload"
            href="https://www.google-analytics.com/analytics.js"
            as="script"
          ></link>
          <link
            rel="preload"
            href={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            as="script"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <Script
            src="//js-na1.hs-scripts.com/5494710.js"
            id="hs-script-loader"
            strategy="beforeInteractive"
            async
            defer
          /> */}
          <Script
            src="/conversation.js"
            id="hubspot-messages-loader"
            // type="text/javascript"
            strategy="beforeInteractive"
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
