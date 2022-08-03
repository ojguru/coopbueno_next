import Document, { Html, Head, Main, NextScript } from "next/document";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Script = dynamic(() => import("next/script"), { ssr: false });

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
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
          {/* <Script
            src="https://js.hs-analytics.net/analytics/1659502500000/5494710.js"
            id="hs-analytics"
            type="text/javascript"
            strategy="lazyOnload"
          /> */}
          <Suspense>
            <Script
              src="https://js.usemessages.com/conversations-embed.js"
              id="hubspot-messages-loader"
              // type="text/javascript"
              strategy="afterInteractive"
              data-loader="hs-scriptloader"
              data-hsjs-portal="5494710"
              data-hsjs-env="prod"
              data-hsjs-hublet="na1"
            />
          </Suspense>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
