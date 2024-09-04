import React from "react";
import Link from "next/link";
import styles from "./Cta.module.scss";

interface CtaProps {
  cta?: any;
  onClick?: any;
}
const Cta = ({ cta, onClick }: CtaProps) => {
  return cta ? (
    <Link href={cta.uri ?? ""} className={styles.cta} target={cta.target ? "_blank" : ""}
    rel={cta.target ? "noreferrer noopener" : ""}
    onClick={onClick}>
      {cta.texto}
    </Link>
  ) : null;
};

export default Cta;

