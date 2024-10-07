"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import { sendEvent } from "@/lib/api";

const Phone = ({ phone }: { phone: string }) => {
  return (
    <Link
      className={styles.sucursalPhone}
      href={`tel:+${phone}`}
      onClick={() => {
        sendEvent("Contact", false, {});
      }}
    >
      {phone}
    </Link>
  );
};

export default Phone;
