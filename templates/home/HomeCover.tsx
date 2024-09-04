import styled from "@emotion/styled";
import Image from "next/image";
import Cta from "@/components/Cta";
import { getImageURL } from "@/lib/api";
import { ComponentSharedCta } from "@/gql/graphql";
import styles from "./HomeCover.module.scss";

interface HomeCoverProps {
  portada: any;
}
const HomeCover = ({ portada }: HomeCoverProps) => {
  const imagen = portada.imagen?.data?.attributes.url;

  const cta: ComponentSharedCta = {
    ...portada.cta,
    uri: "#servicios",
  };

  return (
    <section className={styles.cover}>
      <div className={styles.imageContainer}>
        <Image 
          src={getImageURL(imagen)}
          alt="Coopbueno Apoyando Tus Sueños"
          width={1920}
          height={1080}
          priority
          objectFit="cover"
          objectPosition="75% 0%"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{portada.titular}</h2>

        <p className={styles.copy}>{portada.copy}</p>

        <div className={styles.linkBox}>
          <Cta cta={cta} />
        </div>
      </div>
    </section>
  );
};

export default HomeCover;
