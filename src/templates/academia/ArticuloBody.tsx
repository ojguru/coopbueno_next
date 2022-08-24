import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Categorias from "./ArticuloCategorias";
import Meta from "./ArticuloMeta";
import { container, mq } from "components/grid";
import Imagen from "next/image";
import { ArticleEntity } from "client";
import { getImageURL } from "lib/api";
import Editor from "components/editor.js/Editor";

interface ArticuloBodyProps {
  articulo: ArticleEntity | undefined;
}
const ArticuloBody = ({ articulo }: ArticuloBodyProps) => {
  const post = articulo?.attributes;
  const imagen = post?.image?.data?.attributes;

  const categoria = post?.category?.data;
  const categorias = [];

  if (categoria) {
    categorias.push(categoria);
  }

  return post ? (
    <Article>
      <MediaContainer>
        <Media>
          <Imagen
            src={getImageURL(imagen?.url)}
            alt={post?.title}
            width={1920}
            height={1080}
            objectFit="cover"
            priority
          />
        </Media>
      </MediaContainer>
      <InfoContainer maxWidth="75rem" space thin>
        <PostHeader>
          <Categorias categorias={categorias} />

          <PostTitle
            as="h1"
            className="heading-size-1"
            dangerouslySetInnerHTML={{ __html: post?.title || "" }}
          />

          {/* The post's metadata like author, publish date, and comments */}
          <Meta articulo={post} />
        </PostHeader>
        <Content>
          <Editor content={post.content} />
        </Content>
      </InfoContainer>
    </Article>
  ) : null;
};

export default ArticuloBody;

const Article = styled.article`
  display: grid;
  min-height: 100vh;
  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MediaContainer = styled.div``;

const Media = styled.div`
  display: grid;
  font-size: 0;
  ${mq.lg} {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
  }
`;

const InfoContainer = styled.div`
  ${container}
  ${({ maxWidth = "70rem" }) => css`
    margin-left: auto;
    margin-right: auto;
    ${mq.lg} {
      max-width: ${maxWidth};
      padding: 0 2rem;
    }
    ${mq.xl} {
      padding: 0 4rem;
    }
  `}
`;

const PostHeader = styled.div`
  background-color: #fff;
  margin: 0;
  padding: 2rem 0;
  ${mq.md} {
    padding-top: 2rem;
    padding-bottom: 6rem;
  }
`;

const PostTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  ${mq.lg} {
    text-align: left;
  }
`;

const Content = styled.div``;
