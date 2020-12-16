import React, { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { INavState } from "@Interfaces/Navbar";

import {
  closeMenu,
  staggerText,
  staggerReveal,
  fadeInUp,
  openMenu,
} from "animations";

type HamburguerProps = {
  state: INavState;
};

const Hamburger: FC<HamburguerProps> = ({ state }) => {
  // Vars for dom elements
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let info = useRef(null);

  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    themeChanger();
    if (state.clicked === false) {
      // close menu

      closeMenu(
        revealMenu.current as any,
        revealMenuBackground.current as any,
        menu.current as any
      );
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === false)
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
      staggerText(line1.current as any, line2.current as any);
    }
  }, [state]);

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

  return (
    <div className="hamburguer_menu" ref={menu}>
      <div className="menu_second_background" ref={revealMenuBackground}></div>
      <div className="menu_layer" ref={revealMenu}>
        <div className="menu_container">
          <div className="menu_links">
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a ref={line1}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts">
                    <a ref={line2}>Posts</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="info" ref={info}>
              <h3>Hey, you!</h3>

              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <span id="theme" onClick={changeTheme}>
              {theme}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
