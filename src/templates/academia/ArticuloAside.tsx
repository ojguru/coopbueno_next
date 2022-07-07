import { css } from "@emotion/react";
import styled from "@emotion/styled";
// import { FacebookProvider, Comments } from "react-facebook";
import React, { useEffect, useState } from "react";
import PostItem from "./post-item";
import { container, mq } from "components/grid";
// import HubspotForm from "react-hubspot-form";
import { ArticleEntity } from "client";

interface ArticuloAsideProps {
  articulo?: ArticleEntity;
  relacionados?: ArticleEntity[];
}
const ArticuloAside = ({ articulo, relacionados = [] }: ArticuloAsideProps) => {
  return true ? (
    <Aside>
      <Container space small>
        {/* FORMULARIO DE SUBSCRIPCIÓN A NEWSLETTER */}
        <AsideSection as="div">
          <Block>
            <BlockBody>
              <SectionTitle>Recibe mas contenido como este</SectionTitle>
              <p>
                Subscríbete a nuestro newsletter y recibe todos los contenidos
                que actualicemos sobre vida financiera.
              </p>
              <Form>
                {/* <HubspotForm
                  portalId={5494710}
                  formId="bf21c6d7-45e0-48e4-8c07-37e1c9efa554"
                  loading={<Loading />}
                /> */}
              </Form>
            </BlockBody>
          </Block>
        </AsideSection>
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
        <AsideSection as="div">
          <Block>
            <SectionTitle>Comentarios</SectionTitle>
            {/* <FacebookProvider appId="709986282911816">
              <Comments
                href={`https://coopbueno.com.do/academia/${articulo.attributes.slug}`}
              />
            </FacebookProvider> */}
          </Block>
        </AsideSection>
        {relacionados.length ? (
          <Related as="div">
            <SectionTitle>CONTENIDO RELACIONADO</SectionTitle>
            {relacionados.map((item, index) => {
              const post = item.attributes;

              return <PostItem key={index} articulo={post} />;
            })}
          </Related>
        ) : null}
      </Container>
    </Aside>
  ) : null;
};

export default ArticuloAside;

const Aside = styled.aside`
  background-color: white;
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

const Container = styled.section`
  ${container}
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.xl} {
    max-width: 160rem;
  }
`;

const AsideSection = styled.section``;

const Block = styled.div`
  background-color: white;
`;

interface BlockBodyProps {
  maxWidth?: string;
}
const BlockBody = styled.div`
  ${({ maxWidth = "70rem" }: BlockBodyProps) => css`
    max-width: ${maxWidth};
  `}
`;

const Form = styled.div``;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  margin-top: initial;
`;

const Related = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
  ${mq.md} {
    grid-column: 1 / span 2;
  }
  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ${SectionTitle} {
    grid-column: 1 / span 2;
    ${mq.lg} {
      grid-column: 1 / span 4;
    }
  }
`;
