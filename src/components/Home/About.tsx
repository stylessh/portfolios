import styles from "@Styles/components/About.module.scss";
import { FC, useRef } from "react";

import { motion, useViewportScroll, useTransform } from "framer-motion";

const transition = {
  duration: 0.5,
  delay: 0.05,
  ease: [0.25, 1, 0.5, 1],
};

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

              <div className={`${styles.line} wow fadeInUp`}></div>
            </div>

            <div className={styles.me}>
              <p className="fadeIn">Hey There! I'm Alan, a web developer.</p>

              <p className="fadeIn">
                I enjoy creating things that live on the internet, whether that
                be websites, applications, etc.
              </p>

              <p className="fadeIn">
                I started to program at 14 years old! Now I'm 16, and i have
                created many cool stuff. You can see some of them in my
                <a href="https://github.com/stylessh" target="_blank">
                  github
                </a>
                , hope see you in there!
              </p>
            </div>

            <div className={styles.technologies}>
              <p className="fadeIn">
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

          <div className={styles.image}>
            <img className="fadeIn" src="/img/alt-me.jpg" alt="Me" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
