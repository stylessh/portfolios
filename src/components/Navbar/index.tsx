import { FC, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Hamburguer from "@Components/Hamburguer";

import styles from "@Styles/components/Navbar.module.scss";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Navbar: FC = () => {
  let navbar = useRef();

  const router = useRouter();

  const [open, setOpen] = useState({
    initial: false,
    clicked: null,
    menuName: "menu.",
  });

  const [disable, setDisable] = useState(false);

  const [theme, setTheme] = useState<string>("");
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    const exit = () => {
      setOpen({
        initial: null,
        clicked: false,
        menuName: "Menu.",
      });

      document.body.style.overflowY = "scroll";
    };

    themeChanger();

    router.events.on("routeChangeStart", exit);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", exit);
    };
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

  const handleMenu = () => {
    disableMenuButton();

    if (open.initial === false) {
      setOpen({
        initial: null,
        clicked: true,
        menuName: "close.",
      });

      document.body.style.overflowY = "hidden";
    } else if (open.clicked === true) {
      setOpen({
        initial: null,
        clicked: !open.clicked,
        menuName: "menu.",
      });

      document.body.style.overflowY = "scroll";
    } else if (open.clicked === false) {
      setOpen({
        initial: null,
        clicked: !open.clicked,
        menuName: "close.",
      });

      document.body.style.overflowY = "hidden";
    }
  };

  //   determine if our menu button should be disabled
  const disableMenuButton = () => {
    setDisable(!disable);

    setTimeout(() => {
      setDisable(false);
    }, 1200);
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

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ...transition,
          delay: 0.2,
        }}
      >
        <button
          disabled={disable}
          className={styles.btn_menu}
          onClick={handleMenu}
        >
          {open.menuName}
        </button>

        <Hamburguer state={open} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
