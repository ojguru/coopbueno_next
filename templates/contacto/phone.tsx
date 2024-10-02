"use client";

import Link from "next/link";
import React from "react";
import styles from "./oficinas.module.scss";
import { Maybe } from "graphql/jsutils/Maybe";
import { sendEvent } from "@/lib/api";

interface PhoneProps {
  phone: string | Maybe<string>;
}

const Phone = ({ phone }: PhoneProps) => {
  return (
    <Link
      className={styles.phone}
      href={`tel:+${phone}`}
      onClick={() => {
        sendEvent("Contact", true, {});
      }}
    >
      {phone}
    </Link>
  );
};

export default Phone;
