import React from "react";
import PostItem from "./post-item";
import Formulario from "@/components/Formulario";
import { ArticleEntity, ComponentGeneralFormulario } from "@/gql/graphql";
import styles from "./articuloAside.module.scss";

interface ArticuloAsideProps {
  articulo?: ArticleEntity;
  relacionados?: ArticleEntity[];
}
const ArticuloAside = ({ articulo, relacionados = [] }: ArticuloAsideProps) => {
  const formulario: ComponentGeneralFormulario = {
    id: "formulario-bf21c6d7-45e0-48e4-8c07-37e1c9efa554",
    formId: "bf21c6d7-45e0-48e4-8c07-37e1c9efa554",
  };
  return true ? (
    <aside className={styles.aside}>
      <section className={styles.container}>
        {/* FORMULARIO DE SUBSCRIPCIÓN A NEWSLETTER */}
        <div className={styles.asideSection}>
          <div className={styles.block}>
            <div className={styles.blockBody}>
              <h2 className={styles.sectionTitle}>
                Recibe mas contenido como este
              </h2>
              <p>
                Subscríbete a nuestro newsletter y recibe todos los contenidos
                que actualicemos sobre vida financiera.
              </p>
              <div className={styles.form}>
                <Formulario formulario={formulario} />
              </div>
            </div>
          </div>
        </div>
        {/* CALL TO ACTION */}
        {/* {post.meta_box['post-cta'] ? (
          <AsideSection as="div" thin spaceTopNone>
            <Block>
              <BlockBody>
                <CTABlock />
              </BlockBody>
            </Block>
          </AsideSection>
        ) : null} */}
        {/* <AsideSection as="div">
          <Block>
            <SectionTitle>Comentarios</SectionTitle>
            <FacebookProvider appId="709986282911816">
              <Comments
                href={`https://coopbueno.com.do/academia/${articulo?.attributes?.slug}`}
              />
            </FacebookProvider>
          </Block>
        </AsideSection> */}
        {relacionados.length ? (
          <div className={styles.related}>
            <h2 className={styles.sectionTitle}>CONTENIDO RELACIONADO</h2>
            {relacionados.map((item, index) => {
              const post = item.attributes;

              return <PostItem key={index} articulo={post} />;
            })}
          </div>
        ) : null}
      </section>
    </aside>
  ) : null;
};

export default ArticuloAside;
