"use client";

import React, { useEffect, useState } from "react";
import Video from "@/templates/servicios/video";
import { useInView } from "react-intersection-observer";
import { Servicio } from "@/gql/graphql";

interface HomeVideoProps {
  servicio?: Servicio;
}
const HomeVideo = ({ servicio }: HomeVideoProps) => {
  const [ref, inView] = useInView({ initialInView: false });
  //USADO PAR ACTIVAR EL VIDEO Y QUE NO SE CARGUE SIEMPRE QUE ESTÉ INVIEW
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (inView) {
      setVideoActive(true);
    }
  }, [inView, setVideoActive]);
  return servicio ? (
    <div ref={ref}>{videoActive ? <Video servicio={servicio} /> : null}</div>
  ) : (
    <></>
  );
};

export default HomeVideo;
