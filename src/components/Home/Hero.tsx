import styles from "@Styles/components/Hero.module.scss";
import { FC, useRef, useEffect } from "react";

import { revealTitle } from "animations";

const HomeHero: FC = () => {
  let title = useRef();

  let header = useRef();

  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    revealTitle(title.current as any);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.header} ref={header}>
        <h1 className={styles.quote} ref={title}>
          Hey! I'm Alan. A creative web developer.
        </h1>
      </div>
    </section>
  );
};

export default HomeHero;
