"use client";

import React from "react";
import Link from "next/link";
import styles from "./Cta.module.scss";
import { sendEvent } from "@/lib/api";

interface CtaProps {
  cta?: any;
  fbqEvent?: string;
}
const Cta = ({ cta, fbqEvent }: CtaProps) => {
  return cta ? (
    <Link
      href={cta.uri ?? ""}
      className={styles.cta}
      target={cta.target ? "_blank" : ""}
      rel={cta.target ? "noreferrer noopener" : ""}
      onClick={() => {
        if (fbqEvent) {
          sendEvent(fbqEvent, true, {});
        }
      }}
    >
      {cta.texto}
    </Link>
  ) : null;
};

export default Cta;
