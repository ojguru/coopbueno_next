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
          {/* <link rel="preload" href="/conversation.js" as="script" /> */}

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
                "forward": ["dataLayer.push","gtag", "_hsq.push"],
                resolveUrl: function (url, location, type) {
                  if (type === 'script') {
                    const proxyUrl = new URL('https://cdn.builder.codes/api/v1/js-proxy');
                    proxyUrl.searchParams.append('url', url.href);
                    proxyUrl.searchParams.append('apiKey', 'fb60e3c1595342ceb0b20adecc36b419');  
                    return proxyUrl;
                  }
                  return url;
                },
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
          <Script
            src="https://www.google-analytics.com/analytics.js"
            id="google-analytics"
            strategy="worker"
          />
          <Script id="google-analytics-script" strategy="worker">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', '${NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
          </Script>
          <Script
            type="text/javascript"
            async
            defer
            src="https://js.hs-analytics.net/analytics/1659628500000/5494710.js"
            strategy="worker"
          />

          <Script
            type="text/javascript"
            async
            defer
            src="https://js.hs-banner.com/5494710.js"
            strategy="worker"
          />

          <Script
            type="text/javascript"
            async
            defer
            src="http://js.hs-scripts.com/5494710.js"
            strategy="worker"
          />

          <Script
            type="text/javascript"
            async
            defer
            src="https://js.hsadspixel.net/fb.js"
            strategy="worker"
          />
          <Script
            type="text/javascript"
            async
            defer
            src="https://js.hscollectedforms.net/collectedforms.js"
            strategy="worker"
          />
          <Script
            type="text/javascript"
            async
            defer
            src="https://js.hsleadflows.net/leadflows.js"
            strategy="worker"
          />
          <Script
            type="text/javascript"
            async
            defer
            src="https://js.usemessages.com/conversations-embed.js"
            strategy="worker"
          />
          {/* <Script
            src="/conversation.js"
            id="hubspot-messages-loader"
            strategy="worker"
            data-loader="hs-scriptloader"
            data-hsjs-portal={HUBSPOT_ID}
            data-hsjs-env="prod"
            data-hsjs-hublet="na1"
          /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
