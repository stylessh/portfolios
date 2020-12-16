import { FC, useRef, useEffect } from "react";
import Parallax from "parallax-js";

import { revealTitle } from "animations";


const HomeHero: FC = () => {
  let title = useRef();
  let header = useRef();
  useEffect(() => {
    reveal();

    const prllax = new Parallax(header.current as any);
  }, []);

  const reveal = () => {
    revealTitle(title.current as any);
  };

  return (
    <section className="hero">
      <div className="header" ref={header}>
        <h1 className="quote" ref={title} data-depth="0.1">
          Hey! I'm Alan. A creative web developer.
        </h1>
      </div>
    </section>
  );
};

export default HomeHero;
