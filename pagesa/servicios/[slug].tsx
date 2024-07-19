import React, { Suspense, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { container } from "components/grid";
import dynamic from "next/dynamic";
import Layout from "components/Layout";
import Loading from "components/loading";
import Portada from "templates/servicios/portada";
import Producto from "templates/servicios/producto";
import Ventajas from "templates/servicios/ventajas";
import Requisitos from "templates/servicios/requisitos";
import Beneficios from "templates/servicios/beneficios";

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
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import { getImageURL } from "lib/api";
import { SITE_NAME, SITE_URL } from "lib/constants";
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
        <Section space>
          <Portada servicio={servicio} />
          <Producto servicio={servicio} />
          <div ref={ref}>
            {videoActive ? <Video servicio={servicio} /> : null}
          </div>
          <Ventajas servicio={servicio} />
          <Beneficios servicio={servicio} />
          <Requisitos servicio={servicio} />
          <Conversion formulario={formulario} />
        </Section>
        <NavegadorServicios servicios={servicios} />
      </Layout>
    </Suspense>
  ) : null;
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug.toString();

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

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const Section = styled.section`
  ${container}
`;
