"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import { Maybe } from "graphql/jsutils/Maybe";

interface PhoneProps {
  phone: string | Maybe<string>;
  children: any;
}
const Phone = ({ phone, children }: PhoneProps) => {
  return (
    <Link
      href={`tel:+${phone}`}
      className={styles.sucursalPhone}
      onClick={() => {
        window.fbq("track", "Contact");
      }}
    >
      {children}
    </Link>
  );
};

export default Phone;
