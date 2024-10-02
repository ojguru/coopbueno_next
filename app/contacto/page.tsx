import React from "react";
import Portada from "@/templates/contacto/portada";
import ContactOffices from "@/templates/contacto/oficinas";

import { SITE_NAME, SITE_URL } from "@/lib/constants";
import image from "@/public/contacto.png";
import { fetchAPI } from "@/lib/api";
import { SucursalEntity } from "@/gql/graphql";

const QUERY = `
  query ContactQuery {
    sucursals ( pagination: {pageSize: 100},sort: ["nombre:asc"] ){
      data{
        attributes{
          nombre
          slug
          horario
          telefonos{
            telefono
          }
        }
      }
    }
  }
`;

const queryVars = {};

// export const metadata = {
//   title: `Contacto - ${SITE_NAME}`,
//   description:
//     "Haz contacto con nosotros a través de los canales que tenesmos disponibles para ti.",
//   openGraph: {
//     title: "Contacto",
//     description:
//       "Haz contacto con nosotros a través de los canales que tenesmos disponibles para ti.",
//     url: `${SITE_URL}`,
//     siteName: SITE_NAME,
//     images: [
//       {
//         url: image.src,
//         width: 800,
//         height: 600,
//       },
//     ],
//   },
// };

export default async function Page() {
  const data = await fetchAPI(QUERY, { variables: queryVars });
  const sucursales: SucursalEntity[] = data.sucursals.data;

  return (
    <>
      <Portada />
      <ContactOffices sucursales={sucursales} />
    </>
  );
}
