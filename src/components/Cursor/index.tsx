import React, { useEffect, useRef, useState } from "react";

import styles from "@Styles/components/Cursor.module.scss";
import gsap from "gsap";

const Cursor = () => {
  let cursor = useRef();

  useEffect(() => {
    const ball = cursor.current as any;

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0,
      mouseHeight = 32,
      mouseWidth = 32;

    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          gsap.set(ball, {
            css: {
              left: posX - mouseWidth,
              top: posY - mouseHeight,
            },
          });
        },
      }
    );

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  });

  return <div className={styles.cursor} ref={cursor}></div>;
};

export default Cursor;
