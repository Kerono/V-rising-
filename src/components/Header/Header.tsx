"use client";
import { Moon, Sun } from "react-feather";
import React, { FC, useEffect } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
//TODO ?????? import error?
import Cookies from "js-cookie";
import { darkThemeStyles, lightThemeStyles } from "@/variables";

type Props = {
  initialTheme: string;
};

export const Header: FC<Props> = ({ initialTheme }: Props) => {
  const [theme, setTheme] = React.useState<string>(initialTheme);

  function handleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    const root = document.documentElement;
    root.setAttribute("data-color-theme", nextTheme);
    const nextThemeStyles =
      nextTheme === "light" ? lightThemeStyles : darkThemeStyles;

    for (const [key, value] of Object.entries(nextThemeStyles)) {
      root.style.setProperty(key, value);
    }
  }

  useEffect(() => {
    Cookies.set("theme", theme, { expires: 5 });
  }, [theme]);

  return (
    <div className={styles["header-wrapper"]}>
      <Link className={`${styles.link} ${styles["logo-link"]} `} href="/">
        V Rising
      </Link>
      <div className={styles["links-wrapper"]}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/items">
          Items
        </Link>
        <Link className={styles.link} href="/skills">
          Skills
        </Link>
        <Link className={styles.link} href="/weapons">
          Weapons
        </Link>
        <Link className={styles.link} href="/blood-carriers">
          Blood carriers V
        </Link>
      </div>
      <button className={styles["icon-button"]} onClick={handleTheme}>
        {theme === "light" ? <Sun size={"1.4rem"} /> : <Moon size={"1.4rem"} />}
      </button>
    </div>
  );
};
