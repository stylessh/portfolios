import { FC, useRef } from "react";
import styles from "@Styles/components/About.module.scss";

const HomeAbout: FC = () => {
  let about = useRef(null);

  return (
    <>
      <div id="about"></div>
      <section className={styles.about} ref={about}>
        <div className={styles.grid_2}>
          <article className={styles.info}>
            <div className={styles.header}>
              <div className={styles.mask}>
                <h2 data-aos="fade-up">About me.</h2>
              </div>

              <div className={styles.line} data-aos="fade-up"></div>
            </div>

            <div className={styles.me}>
              <div className={styles.mask}>
                <p data-aos="fade-up" data-aos-delay="400">
                  I enjoy creating things that live on the internet, whether
                  that be websites, applications, etc.
                </p>
              </div>

              <div className={styles.mask}>
                <p data-aos="fade-up" data-aos-delay="500">
                  I've created many cool stuff. You can see some of them in my
                  <a
                    href="https://github.com/stylessh"
                    rel="noreferrer"
                    target="_blank"
                  >
                    github
                  </a>
                  , hope see you in there!
                </p>
              </div>
            </div>

            <div className={styles.technologies}>
              <div className={styles.mask}>
                <p data-aos="fade-up" data-aos-delay="600">
                  Here are a few technologies I've been working with recently:
                </p>
              </div>

              <div className={styles.list}>
                <ul
                  className={styles.left}
                  data-aos="fade-in"
                  data-aos-delay="800"
                >
                  <li>Javascript (ES6+)</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </ul>
                <ul
                  className={styles.right}
                  data-aos="fade-in"
                  data-aos-delay="900"
                >
                  <li>Svelte</li>
                  <li>Typescript</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </article>

          <div className={styles.image}>
            <img
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="600"
              src="/img/me.webp"
              alt="stylessh"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
