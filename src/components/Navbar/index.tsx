import { FC, useEffect, useState, useRef } from "react";
import Link from "next/link";

import styles from "@Styles/components/Navbar.module.scss";

const Navbar: FC = () => {
  let navbar = useRef();

  const [theme, setTheme] = useState("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    themeChanger();
  }, []);

  const changeTheme = (): void => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
      themeChanger();
    } else {
      localStorage.setItem("dark-mode", "false");
      themeChanger();
    }
  };

  const themeChanger = (): void => {
    if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark");

      setTheme("dark.");
    } else {
      document.body.classList.remove("dark");

      setTheme("light.");
    }
  };

  const mouseOn = () => setHover(true);

  const mouseOff = () => setHover(false);

  return (
    <nav
      className={`${styles.navbar} ${hover ? `${styles.hover}` : ""}`}
      ref={navbar}
      onMouseEnter={mouseOn}
      onMouseLeave={mouseOff}
    >
      <span className={styles.brand}>
        <Link href="/">
          <a data-scroll>stylessh</a>
        </Link>
      </span>

      <div className={styles.btn_menu}>menu.</div>

      <ul>
        <div className={styles.close_btn}>close.</div>
        <li>
          <Link href="/">
            <a data-scroll>home.</a>
          </Link>
        </li>

        <li>
          <Link href="/#projects">
            <a data-scroll>work.</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a data-scroll>contact.</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a data-scroll>posts.</a>
          </Link>
        </li>

        <button id={styles.theme} onClick={changeTheme}>
          {theme}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
