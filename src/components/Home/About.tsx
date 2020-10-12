import styles from "@Styles/components/About.module.scss";

const HomeAbout = () => {
  return (
    <>
      <div id="about"></div>
      <section className={styles.about}>
        <div className={styles.grid_2}>
          <article className={styles.info}>
            <div className={styles.header}>
              <h2 className="wow fadeInUp">About me.</h2>
              <div className={`${styles.line} wow fadeInUp`}></div>
            </div>

            <div className={styles.me}>
              <p className="wow fadeIn">
                Hey There! I'm Alan, a web developer.
              </p>

              <p className="wow fadeIn">
                I enjoy creating things that live on the internet, whether that
                be websites, applications, etc.
              </p>

              <p className="wow fadeIn">
                I started to program at 14 years old! Now I'm 16, and i have
                created many cool stuff. You can see some of them in my
                <a href="https://github.com/stylessh" target="_blank">
                  github
                </a>
                , hope see you in there!
              </p>
            </div>

            <div className={styles.technologies}>
              <p className="wow fadeIn">
                Here are a few technologies I've been working with recently:
              </p>

              <ul className={styles.list}>
                <div className={`${styles.left} wow fadeIn`}>
                  <li>Javascript (ES6+)</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </div>
                <div className={`${styles.right} wow fadeIn`}>
                  <li>HTML / SCSS</li>
                  <li>MongoDB</li>
                  <li>Python</li>
                </div>
              </ul>
            </div>
          </article>

          <article className={styles.image}>
            <img className="wow fadeInUp" src="/img/alt-me.jpg" alt="Me" />
          </article>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
