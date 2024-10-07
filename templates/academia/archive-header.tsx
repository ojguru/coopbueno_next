import React from "react";
import styles from "./archiveHeader.module.scss";

interface HeaderProps {
  children?: any;
  color?: string;
  childrenColor?: string;
  title?: string;
  titleHidden?: boolean;
}
const Header = ({ children, title = "Academia De Sueños" }: HeaderProps) => {
  return (
    <header className={styles.archiveHeader}>
      <h1 className={styles.archiveTitle}>{title}</h1>
      <h2 className={styles.archiveCopy}>{children}</h2>
    </header>
  );
};

export default Header;
