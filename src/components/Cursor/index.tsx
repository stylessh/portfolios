import React, { useEffect, useRef } from "react";
import isMobile from "@Utils/isMobile";

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
        ease: "power4.inOut",
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

    const updatePos = (e: MouseEvent) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    if (!isMobile()) {
      document.addEventListener("mousemove", updatePos);
    }
  });

  return <div className="cursor" ref={cursor}></div>;
};

export default Cursor;
