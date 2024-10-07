import React from "react";
import Cta from "@/components/Cta";
import { Check } from "@/components/icons";

import { TpageEntity } from "@/gql/graphql";
import Editor from "@/components/editor.js/Editor";
import { fetchAPI } from "@/lib/api";
import { notFound } from "next/navigation";
import { CTAFragment } from "@/fragments/GeneralSettings";
import styles from "./page.module.scss";

const QUERY = `
  query GraciasQuery($slug:String!) {
    tpages(filters:{slug:{eq:$slug}}){
        data{
            attributes{
                titular
                slug
                contenido
                ${CTAFragment}
            }
        }
    }
  }
`;

const queryVars = {};

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });
  const thankyou: TpageEntity = data.tpages?.data[0];

  if (!thankyou) {
    notFound();
  }

  const page = thankyou?.attributes;

  return page ? (
    <>
      <article className={styles.section}>
        <div className={styles.decoContainer}>
          <div className={styles.decoSquare} />
          <div className={styles.decoRounded}>
            <div className={styles.checkContainer}>
              <Check />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div>
            <h2 className={styles.title}>{page.titular}</h2>
            <div className={styles.content}>
              <Editor content={page.contenido} />
            </div>
            <Cta cta={page.cta} />
          </div>
        </div>
      </article>
    </>
  ) : null;
}
