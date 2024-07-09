import styles from "./Button.module.scss";
import type { ButtonTypes } from "./Button.types";

export default function Button({ children }: ButtonTypes) {
  return <div className={styles.button}>{children}</div>;
}
