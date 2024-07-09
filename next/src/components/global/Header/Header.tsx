import styles from "./Header.module.scss";
import type { HeaderTypes } from "./Header.types";

export default function Header({}: HeaderTypes) {
  return <header className={styles["Header"]}></header>;
}
