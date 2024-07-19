import React from "react";
import styled from "@emotion/styled";
import { mq, container, bp } from "components/grid";
import Carousel from "react-slick";
import colors from "styles/colors";

import { h1 } from "styles/tipography";
import Cta from "components/Cta";
import Image from "next/image";

import { getImageURL } from "lib/api";
import { SlideEntity } from "client";

interface HomeSliderProps {
  slides?: SlideEntity[];
}
const HomeSlider = ({ slides = [] }: HomeSliderProps) => {
  return slides.length ? (
    <Section fluid space large>
      <CarouselWrapper>
        <Carousel
          infinite
          autoplay
          pauseOnHover
          pauseOnFocus
          adaptiveHeight
          dots
          responsive={[
            {
              breakpoint: bp.md,
              settings: {
                arrows: false,
                dots: true,
              },
            },
          ]}
        >
          {slides.map((item, index) => {
            const slide = item.attributes;

            return (
              <Slide key={index}>
                <Wrapper>
                  <MediaWrapper>
                    <Media>
                      <Image
                        src={getImageURL(slide?.imagen?.data?.attributes?.url)}
                        alt={
                          slide?.imagen?.data?.attributes?.alternativeText || ""
                        }
                        width={1080}
                        height={1080}
                        objectFit="cover"
                      />
                    </Media>
                  </MediaWrapper>
                  <SlideInfo>
                    <Title>{slide?.titular}</Title>
                    <Copy
                      dangerouslySetInnerHTML={{
                        __html: slide?.copy || "",
                      }}
                    />
                    <Cta
                      cta={slide?.cta}
                      onClick={() => {
                        window.fbq("track", "slideCTA");
                      }}
                    />
                  </SlideInfo>
                </Wrapper>
              </Slide>
            );
          })}
        </Carousel>
      </CarouselWrapper>
    </Section>
  ) : null;
};

export default HomeSlider;

const Section = styled.section`
  ${container}

  .slick-dots {
    font-size: 0;
    button {
      background-color: ${colors.primary.base};
      opacity: 0.5;
      &:before {
        content: "";
      }
    }
    .slick-active {
      button {
        background-color: ${colors.primary.base};
        opacity: 1;
      }
    }
  }
`;

const Slide = styled.li`
  margin: 0;
`;

const Wrapper = styled.div`
  ${container}
  display: grid;
  gap: 0rem 5rem;
  grid-template-rows: 1fr;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: initial;
    align-items: center;
  }
`;

const CarouselWrapper = styled.div``;

const SlideInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  transition: all 0.25s ease-in-out;
  ${mq.md} {
    text-align: left;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin-top: 0;
  ${h1}
`;

const Copy = styled.p``;

const MediaWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  transition: all 0.25s ease-in-out;
  &:before {
    content: "";
    width: 15%;
    height: 15%;
    border-radius: 50%;
    background-color: ${colors.primary.light};
    position: absolute;
    z-index: 2;
    top: 0%;
    right: 0%;
    transform: translate(-50%, 50%);
    opacity: inherit;
  }
`;

const Media = styled.div`
  position: relative;
  z-index: 1;
  clip-path: ellipse(50% 50% at 50% 50%);
  font-size: 0;
`;
