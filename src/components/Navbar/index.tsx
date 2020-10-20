import { FC, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Hamburguer from "@Components/Hamburguer";

import styles from "@Styles/components/Navbar.module.scss";
import { INavState } from "@Interfaces/Navbar";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Navbar: FC = () => {
  let navbar = useRef();

  const router = useRouter();

  const [open, setOpen] = useState<INavState>({
    initial: false,
    clicked: null,
    menuName: "menu.",
  });

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const exit = () => {
      setOpen({
        initial: true,
        clicked: false,
        menuName: "Menu.",
      });

      document.body.style.overflowY = "scroll";
    };

    router.events.on("routeChangeStart", exit);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", exit);
    };
  }, []);

  const handleMenu = () => {
    disableMenuButton();

    if (open.initial === false) {
      setOpen({
        initial: true,
        clicked: true,
        menuName: "close.",
      });

      document.body.style.overflowY = "hidden";
    } else if (open.clicked === true) {
      setOpen({
        initial: false,
        clicked: false,
        menuName: "Menu.",
      });

      document.body.style.overflowY = "scroll";
    } else if (open.clicked === false) {
      setOpen({
        initial: false,
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
    <nav className={styles.navbar} ref={navbar}>
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
