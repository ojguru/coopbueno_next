import React from "react";
import styled from "@emotion/styled";
import { CalendarIcon } from "components/icons";
import { mq } from "components/grid";
import ScreenReaderText from "styles/screen-reader";
import { Article } from "client";

export const PostMetaWrapper = styled.div`
  margin-top: 2rem;
  ${mq.md} {
    margin-top: 3rem;
  }
`;

export const PostMetaList = styled.ul`
  justify-content: flex-start;
  color: #6d6d6d;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  font-weight: 500;
  list-style: none;
  margin: -1rem 0 0 -2rem;

  svg {
    fill: currentColor;
  }

  ${mq.md} {
    font-size: 1.6rem;
    margin: -1.4rem 0 0 -3rem;
  }
`;
interface ArticuloMetaProps {
  articulo?: Article;
}
const ArticuloMeta = ({ articulo }: ArticuloMetaProps) => {
  const date = new Date(articulo?.publishedAt || "");

  return articulo ? (
    <PostMetaWrapper>
      <PostMetaList>
        {date ? (
          <PostMetaItem>
            <MetaIcon>
              <ScreenReaderText>Fecha de publicación</ScreenReaderText>
              <CalendarIcon />
            </MetaIcon>

            <MetaText>{date.toLocaleString("es-Do")}</MetaText>
          </PostMetaItem>
        ) : null}
      </PostMetaList>
    </PostMetaWrapper>
  ) : null;
};

export default ArticuloMeta;

const MetaIcon = styled.span`
  flex-shrink: 0;
  margin-right: 1rem;
`;

const MetaText = styled.span`
  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const PostMetaItem = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  letter-spacing: -0.016875em;
  margin: 1rem 0 0 2rem;
  max-width: calc(100% - 2rem);
  text-transform: capitalize;

  ${mq.md} {
    margin: 1.4rem 0 0 3rem;
    max-width: calc(100% - 3rem);
  }
`;
