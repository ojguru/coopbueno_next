import React from "react";
import styled from "@emotion/styled";
import { container } from "components/grid";
import { bp } from "components/grid";
import Link from "next/link";
import Image from "next/image";
import { h1 } from "styles/tipography";

import Carousel from "react-slick";
import colors from "styles/colors";
import { getImageURL } from "lib/api";

interface HomeNewsProps {
  noticias?: any[];
}
const HomeNews = ({ noticias = [] }: HomeNewsProps) => {
  return noticias.length ? (
    <Section fluid space>
      <Link href="/noticias" passHref>
        <SLink>
          <SectionTitle>Noticias</SectionTitle>
        </SLink>
      </Link>
      <Body>
        <Carousel
          autoplay={false}
          slidesToShow={2}
          arrows={false}
          draggable={false}
          pauseOnFocus
          pauseOnHover
          infinite={false}
          responsive={[
            {
              breakpoint: bp.lg,
              settings: {
                slidesToShow: 2,
                autoplay: true,
                draggable: true,
              },
            },
            {
              breakpoint: bp.md,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                draggable: true,
              },
            },
            {
              breakpoint: bp.sm,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                draggable: true,
              },
            },
          ]}
        >
          {noticias?.map((item, index) => {
            const post = item.attributes;
            return (
              <Slide key={index}>
                <Post>
                  <Link href={"/noticias/" + post.slug ?? ""} passHref>
                    <PostLink>
                      <MediaWrapper>
                        <ImageContainer>
                          <Image
                            src={getImageURL(post.imagen.data.attributes.url)}
                            width={1920}
                            height={1080}
                            objectFit="cover"
                          />
                        </ImageContainer>
                      </MediaWrapper>
                      <Title>{post.titulo}</Title>
                      <Excerpt
                        dangerouslySetInnerHTML={{
                          __html: post.descripcion,
                        }}
                      />
                    </PostLink>
                  </Link>
                </Post>
              </Slide>
            );
          })}
        </Carousel>
      </Body>
    </Section>
  ) : null;
};

export default HomeNews;

const Section = styled.section`
  ${container}
`;

const Body = styled.div`
  ${container}
  padding: 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 0;
  ${h1}
`;

const Post = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const MediaWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  z-index: 2;
`;
const Title = styled.h3`
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const Excerpt = styled.div`
  color: ${colors.text.base};
`;

const PostLink = styled.a`
  text-decoration: none;
`;

const Slide = styled.div``;

const SLink = styled.a`
  text-decoration: none;
`;
