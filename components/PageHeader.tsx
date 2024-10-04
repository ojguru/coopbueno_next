import React from "react";
import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
  title: string;
}
const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.deco} />
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default PageHeader;
