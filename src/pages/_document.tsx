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
          {/* <link
            rel="preload"
            href="https://js.usemessages.com/conversations-embed.js"
            as="script"
          /> */}

          {/* <link rel="preload" href="/conversation.js" as="script" /> */}

          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <Script
            id="partytown-config"
            strategy="beforeInteractive"
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                // debug: true,
                "forward": [
                  "dataLayer.push", 
                  "_hsq.push"
                ],
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

          {/* <Script
            id="hubspot-messages-loader"
            // data-loader="hs-scriptloader"
            // data-hsjs-portal="5494710"
            // data-hsjs-env="prod"
            // data-hsjs-hublet="na1"
            src="conversation.js"
            async
            defer
            strategy="worker"
          /> */}

          {/* <script
            id="hubspot-messages-loader"
            data-loader="hs-scriptloader"
            data-hsjs-portal="5494710"
            data-hsjs-env="prod"
            data-hsjs-hublet="na1"
            async
            defer
          /> */}

          <Script id="loader" strategy="afterInteractive">{`
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
          }("hubspot-messages-loader", 0, {
              "data-loader": "hs-scriptloader",
              "data-hsjs-portal": 5494710,
              "data-hsjs-env": "prod",
              "data-hsjs-hublet": "na1"
          });
          // !function(t, e, r) {
          //     if (!document.getElementById(t)) {
          //         var n = document.createElement("script");
          //         for (var a in n.src = "https://js.hsleadflows.net/leadflows.js",
          //         n.type = "text/javascript",
          //         n.id = t,
          //         r)
          //             r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
          //         var i = document.getElementsByTagName("script")[0];
          //         i.parentNode.insertBefore(n, i)
          //     }
          // }("LeadFlows-5494710", 0, {
          //     "crossorigin": "anonymous",
          //     "data-leadin-portal-id": 5494710,
          //     "data-leadin-env": "prod",
          //     "data-loader": "hs-scriptloader",
          //     "data-hsjs-portal": 5494710,
          //     "data-hsjs-env": "prod",
          //     "data-hsjs-hublet": "na1"
          // });
          // !function(t, e, r) {
          //     if (!document.getElementById(t)) {
          //         var n = document.createElement("script");
          //         for (var a in n.src = "https://js.hscollectedforms.net/collectedforms.js",
          //         n.type = "text/javascript",
          //         n.id = t,
          //         r)
          //             r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
          //         var i = document.getElementsByTagName("script")[0];
          //         i.parentNode.insertBefore(n, i)
          //     }
          // }("CollectedForms-5494710", 0, {
          //     "crossorigin": "anonymous",
          //     "data-leadin-portal-id": 5494710,
          //     "data-leadin-env": "prod",
          //     "data-loader": "hs-scriptloader",
          //     "data-hsjs-portal": 5494710,
          //     "data-hsjs-env": "prod",
          //     "data-hsjs-hublet": "na1"
          // });
          // var _hsp = window._hsp = window._hsp || [];
          // _hsp.push(['addEnabledFeatureGates', ["CookieBanner:DomainCollection"]]);
          // !function(t, e, r) {
          //     if (!document.getElementById(t)) {
          //         var n = document.createElement("script");
          //         for (var a in n.src = "https://js.hs-banner.com/5494710.js",
          //         n.type = "text/javascript",
          //         n.id = t,
          //         r)
          //             r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
          //         var i = document.getElementsByTagName("script")[0];
          //         i.parentNode.insertBefore(n, i)
          //     }
          // }("cookieBanner-5494710", 0, {
          //     "data-cookieconsent": "ignore",
          //     "data-hs-ignore": true,
          //     "data-loader": "hs-scriptloader",
          //     "data-hsjs-portal": 5494710,
          //     "data-hsjs-env": "prod",
          //     "data-hsjs-hublet": "na1"
          // });
          // !function(e, t) {
          //     if (!document.getElementById(e)) {
          //         var c = document.createElement("script");
          //         c.src = "https://js.hs-analytics.net/analytics/1659664200000/5494710.js",
          //         c.type = "text/javascript",
          //         c.id = e;
          //         var n = document.getElementsByTagName("script")[0];
          //         n.parentNode.insertBefore(c, n)
          //     }
          // }("hs-analytics");
          // !function(t, e, r) {
          //     if (!document.getElementById(t)) {
          //         var n = document.createElement("script");
          //         for (var a in n.src = "https://js.hsadspixel.net/fb.js",
          //         n.type = "text/javascript",
          //         n.id = t,
          //         r)
          //             r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
          //         var i = document.getElementsByTagName("script")[0];
          //         i.parentNode.insertBefore(n, i)
          //     }
          // }("hs-ads-pixel-5494710", 0, {
          //     "data-ads-portal-id": 5494710,
          //     "data-ads-env": "prod",
          //     "data-loader": "hs-scriptloader",
          //     "data-hsjs-portal": 5494710,
          //     "data-hsjs-env": "prod",
          //     "data-hsjs-hublet": "na1"
          // });
          
          `}</Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
