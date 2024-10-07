"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import { Maybe } from "graphql/jsutils/Maybe";
import { sendEvent } from "@/lib/api";

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
        sendEvent("Contact", false, {});
      }}
    >
      {children}
    </Link>
  );
};

export default Phone;
