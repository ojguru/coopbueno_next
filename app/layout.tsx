const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
import { fetchAPI } from "@/lib/api";
import {
  Enum_Servicio_Categoria,
  MenusMenuEntity,
  ServicioEntity,
} from "@/gql/graphql";
import { ImageFragment } from "@/fragments/GeneralSettings";

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

const QUERY = `
  query LayoutQuery {
    menusMenuItems(pagination:{pageSize: 100}, filters:{root_menu:{slug:{in:["header","footer"]}}}, sort:["order:asc"]){
      data{
        id
        attributes{
          url
          target
          title
          parent{
            data{
              id
            }
          }
          root_menu{
            data{
              attributes{
                slug
              }
            }
          }
        }
      }
    }
    servicios ( pagination: {pageSize: 100},filters: {
      categoria: {
        in: [
          "${Enum_Servicio_Categoria.Ahorro}",
          "${Enum_Servicio_Categoria.Prestamos}",
          "${Enum_Servicio_Categoria.Facilidades}",
        ],
      },
    },sort: ["nombre:asc"]){
      data{
        attributes{
          nombre
          slug
          categoria
          tipo
          icono{
            ${ImageFragment}
          }
        }
      }
    }
  }
`;

const queryVars = {};

export const metadata = {
  title: "Coopbueno",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Coopbueno",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchAPI(QUERY, { variables: queryVars });
  const servicios: ServicioEntity[] = data.servicios.data;

  let footerItems: any = [];
  let headerItems: any = [];

  const menuItems: MenusMenuEntity[] = data.menusMenuItems.data.map((item) => {
    //No borrar variables sin utilizar. Se usa para GQTY
    const url = item.attributes?.url;
    const target = item.attributes?.target;
    const title = item.attributes?.title;
    if (item.attributes?.root_menu.data?.attributes?.slug === "header") {
      headerItems.push(item);
    } else {
      footerItems.push(item);
    }
  });

  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head></head>
      <body className={styles.body}>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ThemeProvider>
          <Header servicios={servicios} menuItems={headerItems} />
          <main className={styles.main}>{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
        <Suspense>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  );
}
