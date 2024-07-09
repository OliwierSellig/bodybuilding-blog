import { ReactNode } from "react";
import styles from "./SectionHeader.module.scss";
import type { SectionHeaderTypes } from "./SectionHeader.types";

export default function SectionHeader({ children }: SectionHeaderTypes) {
  return <header className={styles.header}>{children}</header>;
}

function HeaderTitle({ children }: SectionHeaderTypes) {
  return <h2>{children}</h2>;
}

function HeaderSubtitle({ children }: SectionHeaderTypes) {
  return <p>{children}</p>;
}

SectionHeader.Title = HeaderTitle;
SectionHeader.Subtitle = HeaderSubtitle;
