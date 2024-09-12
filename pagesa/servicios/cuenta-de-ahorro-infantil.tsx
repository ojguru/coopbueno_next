import React, { Suspense, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { container, mq } from "@/components/grid";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import Loading from "@/components/loading";
import Portada from "templates/servicios/portadaInfanitil";
import Producto from "templates/servicios/producto";
import UniversoCoopbueno from "templates/servicios/universoCoopbueno";
import LibretaInfantil from "templates/servicios/libretaInfantil";
import Ventajas from "templates/servicios/ventajas";
import Requisitos from "templates/servicios/requisitos";
import Beneficios from "templates/servicios/beneficios";
import Insignias from "templates/servicios/insignias";
import Image from "next/image";
import planeta1 from "../../../public/ahorro-infantil/planeta1.webp";
import planeta2 from "../../../public/ahorro-infantil/planeta2.webp";
import planeta3 from "../../../public/ahorro-infantil/planeta3.webp";
import sol from "../../../public/ahorro-infantil/sol.webp";
import copimoneda from "../../../public/ahorro-infantil/copimoneda.webp";
import space from "../../../public/ahorro-infantil/space.webp";

const Conversion = dynamic(() => import("templates/servicios/conversion"), {
  ssr: false,
});

const Video = dynamic(() => import("templates/servicios/video"), {
  ssr: false,
});

const NavegadorServicios = dynamic(
  () => import("templates/home/HomeServicios"),
  {
    ssr: false,
  }
);

import { NextSeo } from "next-seo";

import { GetStaticProps } from "next";

import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK,
  ENUM_SERVICIO_CATEGORIA,
  ComponentGeneralFormulario,
} from "@/gql/graphql";
import { PropsWithServerCache } from "@gqty/react";
import { getImageURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { useInView } from "react-intersection-observer";

type PageProps = PropsWithServerCache<{
  slug?: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();

  const servicioEntidad = query.servicios({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const servicios = query.servicios({
    pagination: {
      pageSize: 100,
    },
    filters: {
      categoria: {
        in: [
          ENUM_SERVICIO_CATEGORIA.ahorro,
          ENUM_SERVICIO_CATEGORIA.prestamos,
          ENUM_SERVICIO_CATEGORIA.facilidades,
        ],
      },
    },
    sort: ["nombre:asc"],
  })?.data;

  const servicio = servicioEntidad?.attributes;

  const [ref, inView] = useInView({ initialInView: false });

  //SEO
  const image = servicio?.portada?.imagen?.data?.attributes;

  const seo = servicio?.seo;

  const facebookMeta = seo
    ?.metaSocial()
    ?.filter(
      (item) =>
        item?.socialNetwork ===
        ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK.Facebook
    )[0];

  const facebookMetaImage = facebookMeta?.image?.data?.attributes;

  // EVITA PETICIÓN EXTRA A GRAPHQL
  const formulario: ComponentGeneralFormulario = {
    id: servicio?.formulario?.id || "",
    formId: servicio?.formulario?.formId || "",
    redireccion: servicio?.formulario?.redireccion || "",
    mensaje: servicio?.formulario?.mensaje || "",
    titulo: servicio?.formulario?.titulo || "",
  };

  //USADO PAR ACTIVAR EL VIDEO Y QUE NO SE CARGUE SIEMPRE QUE ESTÉ INVIEW
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (inView) {
      setVideoActive(true);
    }
  }, [inView, setVideoActive]);

  return servicio ? (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title={seo?.metaTitle || servicio?.nombre}
        description={seo?.metaDescription || servicio?.portada?.copy}
        canonical={seo?.canonicalURL || `${SITE_URL}/${servicio?.slug}`}
        openGraph={{
          url: `${SITE_URL}/${servicio?.slug}`,
          title: facebookMeta?.title || servicio?.nombre,
          description: facebookMeta?.description || servicio?.portada?.copy,
          images: [
            {
              url: getImageURL(facebookMetaImage?.url || image?.url),
              width: facebookMetaImage?.width || image?.width || 900,
              height: facebookMetaImage?.height || image?.height || 800,
              alt:
                facebookMetaImage?.alternativeText ||
                image?.alternativeText ||
                servicio?.nombre,
              type: facebookMetaImage?.mime || image?.mime,
            },
          ],
          site_name: SITE_NAME,
        }}
        noindex={seo?.metaRobots?.includes("noindex")}
        nofollow={seo?.metaRobots?.includes("nofollow")}
      />
      <Layout>
        <Portada servicio={servicio} />
        <Producto servicio={servicio} />
        {/* <UniversoCoopbueno servicio={servicio} /> */}
        {/* <div ref={ref}>
          {videoActive ? <Video servicio={servicio} /> : null}
        </div> */}
        {/* <LibretaInfantil servicio={servicio} /> */}
        {/* <Insignias /> */}
        <Ventajas servicio={servicio} />
        <Beneficios servicio={servicio} />
        <RequisitosDeco>
          <Requisitos servicio={servicio} />
          <Planeta1>
            <Image src={planeta1} alt="Universo Coopbueno Planeta" />
          </Planeta1>
          <Planeta2>
            <Image src={planeta2} alt="Universo Coopbueno Planeta" />
          </Planeta2>
          <Moneda1>
            <Image src={copimoneda} alt="Universo Coopbueno Planeta" />
          </Moneda1>
          <Moneda2>
            <Image src={copimoneda} alt="Universo Coopbueno Planeta" />
          </Moneda2>
          <Moneda3>
            <Image src={copimoneda} alt="Universo Coopbueno Planeta" />
          </Moneda3>
        </RequisitosDeco>

        <ConversionDeco>
          <Conversion formulario={formulario} />
          <Planeta3>
            <Image src={planeta3} alt="Universo Coopbueno Planeta" />
          </Planeta3>
          <Sol>
            <Image src={sol} alt="Universo Coopbueno Sol" />
          </Sol>
        </ConversionDeco>
        <NavegacionDeco>
          <NavegadorServicios servicios={servicios} />
          <Space>
            <Image src={space} alt="Universo Coopbueno Espacio" />
          </Space>
        </NavegacionDeco>
      </Layout>
    </Suspense>
  ) : null;
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = "cuenta-de-ahorro-infantil";

  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  // NOT FOUND - DETERMINAMOS SI NO EXISTEN DATOS EN LA CONSULTA DEL SNAPSHOT
  const snapShot: any = await JSON.parse(cacheSnapshot);
  const cache = await snapShot.cache;
  const keys = Object.keys(cache).filter((key) => key.includes("servicios"));

  const notFound =
    keys.filter(
      (key) =>
        cache[key]?.data?.filter((item: any) => item.attributes?.slug === slug)
          .length > 0
    ).length === 0;

  return {
    notFound: notFound,
    props: {
      cacheSnapshot,
      slug,
    },
  };
};

const RequisitosDeco = styled.div`
  ${container}
  padding: 0;
  position: relative;

  section > div {
    @include mq(md) {
      display: grid;
      grid-template-columns: 6fr 1fr;
    }
    ul {
      @include mq(md) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;

const Planeta1 = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 15%;
  transform: translate(-25%, 50%);
`;

const Planeta2 = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 5%;
  transform: translate(-100%, -100%);
`;

const Moneda1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  transform: translate(40%, 0%);
`;
const Moneda2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  transform: translate(0%, 100%);
`;
const Moneda3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10%;
  transform: translate(25%, 350%);
`;

const ConversionDeco = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  position: relative;
`;

const Planeta3 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35%;
  z-index: -2;
  transform: translate(50%, -10%);
`;
const Sol = styled.div`
  position: absolute;
  left: 0;
  top: 10rem;
  width: 25%;
  transform: translate(-50%, 0%);
`;

const NavegacionDeco = styled.div`
  position: relative;
`;

const Space = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0;
  width: 200%;
  z-index: -1;
  transform-origin: center center;
  transform: translate(-55%, 50%) rotate(-65deg);
  @include mq(md) {
    width: 100%;
    /* transform: translate(-60%, -50%); */
  }
`;
