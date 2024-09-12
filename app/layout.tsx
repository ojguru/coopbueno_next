import "@/styles/global.scss";
import "@/styles/variables.module.scss";
import "@/styles/tipography.module.scss";
import ThemeProvider from "@/components/ThemeProvider";
import styles from "@/app/layout.module.scss";

import { Lato, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import Script from "next/script";
import { FacebookPixelEvents } from "@/components/pixelEvents";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--lato",
});

export const metadata = {
  title: "Preventis",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Preventis",
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    images: [
      {
        url: "/cover.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head></head>
      <body className={styles.body}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VC9S7ZRPZ8"
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VC9S7ZRPZ8');
          `}
        </Script>
        <ThemeProvider>
          <Suspense>
            {/* <Header /> */}
          </Suspense>
          <main className={styles.main}>{children}</main>
          <Suspense>
            {/* <Footer /> */}
          </Suspense>
        </ThemeProvider>
        {/* <Suspense>
          <FacebookPixelEvents />
        </Suspense> */}
      </body>
    </html>
  );
}
