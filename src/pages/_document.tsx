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
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* CARGA GOOGLE ANALYTICS EN EL WORKER */}
          <Script
            id="tag-manager"
            src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          ></Script>
          <Script
            src="https://www.google-analytics.com/analytics.js"
            id="google-analytics"
            strategy="afterInteractive"
          />
          <Script id="google-analytics-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', '${NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
          </Script>
          {/* Start of HubSpot Embed Code  */}
          {/* <Script
            type="text/javascript"
            id="hs-script-loader"
            strategy="afterInteractive"
            async
            defer
            src="//js.hs-scripts.com/5494710.js"
          ></Script> */}
          {/* End of HubSpot Embed Code  */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
