const NEXT_PUBLIC_GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
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
          {/* <Script id="google-analytics" strategy="afterInteractive">
            {`
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','/analytics.js','ga');
  
              ga('create', ${NEXT_PUBLIC_GA_MEASUREMENT_ID}, 'auto');
              ga('send', 'pageview');
              `}
          </Script> */}
          <Script
            src="/conversation.js"
            id="hubspot-messages-loader"
            // type="text/javascript"
            strategy="worker"
            data-loader="hs-scriptloader"
            data-hsjs-portal="5494710"
            data-hsjs-env="prod"
            data-hsjs-hublet="na1"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
