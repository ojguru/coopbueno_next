import React from "react";
import YouTube from "react-youtube";
import { Servicio } from "@/gql/graphql";
import styles from "./video.module.scss";

interface ProductProps {
  servicio: Servicio;
}
const Video = ({ servicio }: ProductProps) => {
  const video = servicio.video;
  const parseURL = video?.includes("http") ? new URL(video) : null;
  const videoId = parseURL?.searchParams.get("v");

  return videoId ? (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.media}>
          <YouTube videoId={videoId} />
        </div>
      </div>
    </section>
  ) : null;
};

export default Video;
