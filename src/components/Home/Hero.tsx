import styles from "@Styles/components/Hero.module.scss";
import { FC, useRef, useEffect } from "react";

import { revealImage, revealTitle } from "animations";

const HomeHero: FC = () => {
  let first_image = useRef();
  let second_image = useRef();
  let third_image = useRef();

  let title = useRef();

  let header = useRef();

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
      <div className={styles.header} ref={header}>
        <article
          className={`${styles.secondary_img} ${styles.light}`}
          ref={first_image}
        >
          <img src="/img/light.webp" alt="Light" />
        </article>

        <article
          className={`${styles.main_img} ${styles.rose}`}
          ref={third_image}
        >
          <img src="/img/rose.webp" alt="Rose" />
        </article>

        <h1 className={styles.quote} ref={title}>
          Making things, inpired by things.
        </h1>

        <article
          className={`${styles.secondary_img} ${styles.water}`}
          ref={second_image}
        >
          <img src="/img/water.webp" alt="Water" />
        </article>
      </div>
    </section>
  );
};

export default HomeHero;
