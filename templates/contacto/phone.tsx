"use client";

import Link from "next/link";
import React from "react";
import styles from "./oficinas.module.scss";
import { Maybe } from "graphql/jsutils/Maybe";

interface PhoneProps {
  phone: string | Maybe<string>;
}

const Phone = ({ phone }: PhoneProps) => {
  return (
    <Link
      className={styles.phone}
      href={`tel:+${phone}`}
      onClick={() => {
        window.fbq("track", "Contact");
      }}
    >
      {phone}
    </Link>
  );
};

export default Phone;
