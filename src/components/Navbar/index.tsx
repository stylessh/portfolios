import { FC, useEffect, useState, useRef } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { motion } from "framer-motion";

import styles from "@Styles/components/Navbar.module.scss";
import { route } from "next/dist/next-server/server/router";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Navbar: FC = () => {
  let navbar = useRef();

  const router = useRouter();

  const [theme, setTheme] = useState<string>("");
  const [hover, setHover] = useState<boolean>(false);

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

  const handleInnerLinks = (href: string, e: any) => {
    e.preventDefault();

    router.push(href);
  };

  return (
    <nav
      className={`${styles.navbar} ${hover ? `${styles.hover}` : ""}`}
      ref={navbar}
      onMouseEnter={mouseOn}
      onMouseLeave={mouseOff}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        className={styles.brand}
      >
        <Link href="/">
          <a data-scroll>stylessh</a>
        </Link>
      </motion.span>

      <div className={styles.btn_menu}>menu.</div>

      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ...transition,
          delay: 0.2,
        }}
      >
        <div className={styles.close_btn}>close.</div>

        <li>
          <Link href="/">
            <a>home.</a>
          </Link>
        </li>

        <li>
          <Link href="/posts">
            <a>posts.</a>
          </Link>
        </li>

        <button id={styles.theme} onClick={changeTheme}>
          {theme}
        </button>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
