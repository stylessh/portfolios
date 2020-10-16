import styles from "@Styles/components/Hero.module.scss";
import { FC, useRef, useEffect } from "react";

import { revealImage, revealTitle } from "animations";

const HomeHero: FC = () => {
  let first_image = useRef();
  let second_image = useRef();
  let third_image = useRef();

  let title = useRef();

  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    revealImage(
      first_image.current as any,
      second_image.current as any,
      third_image.current as any
    );

    revealTitle(title.current as any);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <article
          className={`${styles.secondary_img} ${styles.light}`}
          ref={first_image}
        >
          <div className={styles.overlay}></div>
          <img src="/img/light.png" alt="Light" />
        </article>

        <article
          className={`${styles.main_img} ${styles.rose}`}
          ref={third_image}
        >
          <div className={styles.overlay}></div>
          <img src="/img/rose.png" alt="Rose" />
        </article>

        <h1 className={styles.quote} ref={title}>
          Making things, inpired by things.
        </h1>

        <article
          className={`${styles.secondary_img} ${styles.water}`}
          ref={second_image}
        >
          <div className={styles.overlay}></div>
          <img src="/img/water.png" alt="Water" />
        </article>
      </div>
    </section>
  );
};

export default HomeHero;
