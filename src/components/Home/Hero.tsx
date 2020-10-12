import styles from "@Styles/components/Hero.module.scss";

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <h1 className={`${styles.line} ${styles.typewritter}`}>
          I make brands matter in culture.
        </h1>
      </div>
      <div className={styles.scroll_down}></div>
    </section>
  );
};

export default HomeHero;
