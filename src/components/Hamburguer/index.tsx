import React, { useEffect, useRef } from "react";
import Link from "next/link";

import {
  closeMenu,
  staggerText,
  staggerReveal,
  fadeInUp,
  openMenu,
} from "animations";

import styles from "@Styles/components/Hamburguer.module.scss";

const Hamburger = ({ state }) => {
  // Vars for dom elements
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu

      closeMenu(
        revealMenu.current as any,
        revealMenuBackground.current as any,
        menu.current as any
      );
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu

      openMenu(
        menu.current as any,
        revealMenuBackground.current as any,
        revealMenu.current as any
      );

      staggerReveal(
        revealMenuBackground.current as any,
        revealMenu.current as any
      );

      fadeInUp(info.current as any);
      staggerText(
        line1.current as any,
        line2.current as any,
        line3.current as any
      );
    }
  }, [state]);

  return (
    <div className={styles.hamburguer_menu} ref={menu}>
      <div
        className={styles.menu_second_background}
        ref={revealMenuBackground}
      ></div>
      <div className={styles.menu_layer} ref={revealMenu}>
        <div className={styles.menu_container}>
          <div className={styles.menu_links}>
            <nav>
              <ul>
                <li ref={line1}>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li ref={line2}>
                  <Link href="/posts">
                    <a>Posts</a>
                  </Link>
                </li>
                <li ref={line3}>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>

            <div className={styles.info} ref={info}>
              <h3>Our Promise</h3>

              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
