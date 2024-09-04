"use client";

import React from "react";
import { bp } from "@/components/grid";
import Carousel from "react-slick";

import Cta from "@/components/Cta";
import Image from "next/image";

import { getImageURL } from "@/lib/api";
import { SlideEntity } from "@/gql/graphql";

import styles from "./HomeSlider.module.scss";

interface HomeSliderProps {
  slides?: SlideEntity[];
}
const HomeSlider = ({ slides = [] }: HomeSliderProps) => {
  return slides.length ? (
    <section className={styles.section} fluid space large>
      <div className={styles.carouselWrapper}>
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
              <li key={index} className={styles.slide}>
                <div className={styles.wrapper}>
                  <div className={styles.mediaWrapper}>
                    <div className={styles.media}>
                      <Image
                        src={getImageURL(slide?.imagen?.data?.attributes?.url)}
                        alt={
                          slide?.imagen?.data?.attributes?.alternativeText || ""
                        }
                        width={1080}
                        height={1080}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className={styles.slideInfo}>
                    <h2 className={styles.title}>{slide?.titular}</h2>
                    <p
                      className={styles.copy}
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
                  </div>
                </div>
              </li>
            );
          })}
        </Carousel>
      </div>
    </section>
  ) : null;
};

export default HomeSlider;
