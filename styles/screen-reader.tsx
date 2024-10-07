import styles from "./screenReader.module.scss";

export default function ScreenReader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.screenReaderText}>{children}</div>;
}
