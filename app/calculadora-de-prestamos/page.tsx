import React from "react";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Calculadora from "@/components/calculadora";

export const metadata = {
  title: `Calculadora de préstamos - ${SITE_NAME}`,
  description: "Calcula tus préstamos y solicítalos con facilidad.",
  openGraph: {
    title: "Calculadora de préstamos",
    description: "Calcula tus préstamos y solicítalos con facilidad.",
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    // images: [
    //   {
    //     url: image.src,
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
};

export default async function Page() {
  return <Calculadora />;
}
