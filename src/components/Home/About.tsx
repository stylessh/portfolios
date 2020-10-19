import { FC, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const transition = {
  duration: 0.8,
  ease: [0.25, 1, 0.5, 1],
};

import styles from "@Styles/components/About.module.scss";

const HomeAbout: FC = () => {
  let about = useRef(null);

  const { scrollYProgress } = useViewportScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -50, -100]);

  return (
    <>
      <div id="about"></div>
      <section className={styles.about} ref={about}>
        <div className={styles.grid_2}>
          <article className={styles.info}>
            <div className={styles.header}>
              <div className={styles.mask}>
                <motion.h2 style={{ y: yPosAnim }} transition={transition}>
                  About me. <br /> About me.
                </motion.h2>
              </div>

              <div className={styles.line}></div>
            </div>

            <div className={styles.me}>
              <div className={styles.mask}>
                <p data-aos="fade-up" data-aos-delay="300">
                  Hey There! I'm Alan, a web developer.
                </p>
              </div>

              <div className={styles.mask}>
                <p data-aos="fade-up" data-aos-delay="400">
                  I enjoy creating things that live on the internet, whether
                  that be websites, applications, etc.
                </p>
              </div>

              <div className={styles.mask}>
                <p data-aos="fade-up" data-aos-delay="500">
                  I started to program at 14 years old! Now I'm 16, and i have
                  created many cool stuff. You can see some of them in my
                  <a href="https://github.com/stylessh" target="_blank">
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

              <ul className={styles.list}>
                <div
                  className={styles.left}
                  data-aos="fade-in"
                  data-aos-delay="800"
                >
                  <li>Javascript (ES6+)</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </div>
                <div
                  className={styles.right}
                  data-aos="fade-in"
                  data-aos-delay="900"
                >
                  <li>HTML / SCSS</li>
                  <li>MongoDB</li>
                  <li>Python</li>
                </div>
              </ul>
            </div>
          </article>

          <div className={styles.image}>
            <img
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="600"
              src="/img/alt-me.jpg"
              alt="Me"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
