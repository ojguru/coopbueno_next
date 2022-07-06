import styled from "@emotion/styled";
import React from "react";
import Post from "templates/noticias/post-item";
import { container, mq } from "components/grid";
import ArchiveHeader from "templates/noticias/archive-header";
// import Pagination from '../archive-pagination'
// import Navigation from 'templates/noticias/archive-navigation'
import Link from "next/link";

// import { CardActions } from "@material-ui/core";
import colors from "styles/colors";

import { CategoryEntity, NoticiaEntity } from "client";

interface ArchivoProps {
  titulo: string;
  descripcion?: string;
  // categorias: CategoryEntity[]
  articulos?: NoticiaEntity[];
}
const Archivo = ({
  titulo,
  descripcion,
  // categorias,
  articulos,
}: ArchivoProps) => {
  return (
    <>
      <Header spaceTop>
        <Link href="/noticias" passHref>
          <SLink>
            <ArchiveHeader color={colors.primary.base} title={titulo} />
          </SLink>
        </Link>
      </Header>

      {/* <Navigation categorias={categorias} /> */}

      {articulos?.length ? (
        <Main space thin>
          <MPost>
            {/* Iterate over the items of the list. */}
            {articulos.map((props, index) => {
              const articuloEntidad = articulos[index];
              const articulo = articuloEntidad.attributes;
              const isFirstItem = index === 0;
              const isMainItem = index <= 3;
              // Render one Item component for each one.
              return isFirstItem && articulo ? (
                <APost key={index}>
                  <Post articulo={articulo} {...{ isMainItem, isFirstItem }} />
                </APost>
              ) : null;
            })}
          </MPost>
          <SPost>
            {/* Iterate over the items of the list. */}
            {articulos.map((props, index) => {
              const articuloEntidad = articulos[index];
              const articulo = articuloEntidad.attributes;
              const isFirstItem = index === 0;
              const isMainItem = index <= 3;
              // Render one Item component for each one.
              return articulo && isMainItem && !isFirstItem ? (
                <APost key={index}>
                  <Post articulo={articulo} {...{ isMainItem, isFirstItem }} />
                </APost>
              ) : null;
            })}
          </SPost>
          <Secondary>
            {/* Iterate over the items of the list. */}
            {articulos.map((props, index) => {
              const articuloEntidad = articulos[index];
              const articulo = articuloEntidad.attributes;
              const isMainItem = index <= 3;
              const isWideItem = false;
              const rightDeco = (index + 1) % 24 == 0;
              const leftDeco = (index + 2) % 12 == 0;
              // Render one Item component for each one.
              return !isMainItem && articulo ? (
                <APost key={index}>
                  <Post
                    articulo={articulo}
                    {...{ isWideItem, leftDeco, rightDeco }}
                  />
                </APost>
              ) : null;
            })}
          </Secondary>
        </Main>
      ) : null}

      {/* {data.totalPages > 1 && <Pagination size="thin" />} */}
    </>
  );
};

export default Archivo;

const Header = styled.section`
  ${container}
`;

const Main = styled.div`
  ${container}
  display: grid;
  gap: 3rem;
  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Secondary = styled.div`
  display: grid;
  gap: 3rem;
  ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${mq.lg} {
    grid-column: 1 / span 2;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const MPost = styled.div``;

const SPost = styled.div``;

const APost = styled.div``;

const SectionImage = styled.div`
  max-width: 20rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  ${mq.md} {
    max-width: 30rem;
    margin-top: initial;
  }
  ${mq.lg} {
    max-width: 35rem;
  }
`;

const SLink = styled.a`
  text-decoration: none;
`;
