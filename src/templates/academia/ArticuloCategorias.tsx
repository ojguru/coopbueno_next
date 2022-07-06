import React from "react";
import styled from "@emotion/styled";
import ScreenReaderText from "styles/screen-reader";
import Link from "next/link";
import { mq } from "components/grid";
import { CategoryEntity } from "client";
import { getURL } from "lib/api";

interface ArticuloCategoriasProps {
  categorias: CategoryEntity[];
}

const ArticuloCategorias = ({ categorias }: ArticuloCategoriasProps) => {
  return (
    <EntryCategories>
      <ScreenReaderText>Categorias</ScreenReaderText>

      <EntryCategoriesInner>
        {categorias.map((item, index) => {
          const categoria = item?.attributes;

          return categoria ? (
            <CategoryTag
              key={index}
              href={getURL(`/academia/categoria/${categoria?.slug}`)}
              passHref
            >
              <a>{categoria?.name}</a>
            </CategoryTag>
          ) : null;
        })}
      </EntryCategoriesInner>
    </EntryCategories>
  );
};

export default ArticuloCategorias;

const EntryCategories = styled.div`
  line-height: 1.25;
  margin-bottom: 2rem;

  ${mq.md} {
    margin-bottom: 3rem;
  }
`;

const EntryCategoriesInner = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem 0 0 -1rem;

  ${mq.md} {
    margin: -1rem 0 0 -2rem;
  }
`;

const CategoryTag = styled(Link)`
  border-bottom: 0.15rem solid currentColor;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.036666667em;
  margin: 0.5rem 0 0 1rem;
  text-decoration: none;
  text-transform: uppercase;

  ${mq.md} {
    font-size: 1.5rem;
    margin: 1rem 0 0 2rem;
  }

  transition: border-bottom-color 150ms;
  :hover {
    border-bottom-color: transparent;
  }
`;
