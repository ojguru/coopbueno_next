import React from "react";
import Image from "next/image";

import Lista from "@/components/Lista";
import Formulario from "@/components/Formulario";

import {
  Enum_Componentsharedmetasocial_Socialnetwork,
  Landing,
  LandingEntity,
} from "@/gql/graphql";
import { fetchAPI, getImageURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import {
  FormFragment,
  ImageFragment,
  SEOFragment,
} from "@/fragments/GeneralSettings";
import styles from "./page.module.scss";

const QUERY = `
  query LandingQuery($slug:String!) {
    landings( filters:{slug:{eq:$slug}}){
      data{
        attributes{
            slug
            titular
            copy
            contenido{
                __typename
                ... on ComponentGeneralLista {
                    titulo
                    items {
                    texto
                    }
                }
            }
            imagen{
                ${ImageFragment}
            }
            ${FormFragment}
            ${SEOFragment}
        }
      }
    }
  }
`;

const queryVars = {};

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const page: Landing = data.landings?.data[0]?.attributes;

  // SEO
  const image = page?.imagen?.data?.attributes;

  const seo = page?.seo;

  const facebookMeta = seo?.metaSocial?.filter(
    (item) =>
      item?.socialNetwork ===
      Enum_Componentsharedmetasocial_Socialnetwork.Facebook
  )[0];

  const facebookMetaImage = facebookMeta?.image?.data?.attributes;

  return {
    metadatabase: new URL(SITE_URL),
    title: `${seo?.metaTitle || page?.titular} - ${SITE_NAME}`,
    description: seo?.metaDescription || page?.copy || page?.titular,
    openGraph: {
      title: facebookMeta?.title || page?.titular,
      description: facebookMeta?.description || page?.copy || page?.titular,
      url: `${SITE_URL}/${page?.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: getImageURL(facebookMetaImage?.url || image?.url),
          width: facebookMetaImage?.width || image?.width || 900,
          height: facebookMetaImage?.height || image?.height || 800,
          alt:
            facebookMetaImage?.alternativeText ||
            image?.alternativeText ||
            page?.titular,
          type: facebookMetaImage?.mime || image?.mime,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });
  const landing: LandingEntity = data.landings?.data[0];

  const page = landing?.attributes;
  const formulario = page?.formulario;
  const contenido = page?.contenido?.map((item: any) => item);

  return page ? (
    <>
      <article className={styles.article}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>{page?.titular}</h1>
            <p>{page.copy}</p>
            <Image
              src={getImageURL(page?.imagen?.data?.attributes?.url)}
              alt={page.titular}
              width={1080}
              height={1080}
              priority
              objectFit="contain"
            />
          </header>
          <div className={styles.formWrapper}>
            <div className={styles.landingForm}>
              <Formulario formulario={formulario} />
            </div>
          </div>
          {contenido?.length
            ? contenido.map((component: any, index: number) => {
                if (component?.__typename === "ComponentGeneralLista") {
                  return <Lista lista={component} key={index} />;
                }
                return null;
              })
            : null}
        </div>
        <div className={styles.deco} />
      </article>
    </>
  ) : null;
}
