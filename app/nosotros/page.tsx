import { SITE_NAME, SITE_URL } from "@/lib/constants";
import React from "react";
import Cover from "@/templates/about/about-cover";
import Promese from "@/templates/about/about-promese";
import Slides from "@/templates/about/about-slides";
import image from "../../public/nosotros.jpg";

export const metadata = {
  title: `Nosotros - ${SITE_NAME}`,
  description: "Conoce nuestra historia.",
  openGraph: {
    title: "Nosotros",
    description: "Conoce nuestra historia.",
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    images: [
      {
        url: image.src,
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Cover />
      <Promese />
      <Slides />
    </>
  );
}
