"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import { sendEvent } from "@/lib/api";

const ReadMore = ({
  children,
  location,
}: {
  children: any;
  location: string;
}) => {
  return (
    <Link
      className={styles.readMore}
      href={location ?? ""}
      onClick={() => {
        sendEvent("FindLocation", true, {});
      }}
    >
      {children}
    </Link>
  );
};

export default ReadMore;
