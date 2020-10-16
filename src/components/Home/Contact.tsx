import React, { FC } from "react";

import styles from "@Styles/components/Contact.module.scss";

const HomeContact: FC = () => {
  return (
    <>
      <div id="contact"></div>
      <section className={styles.contact}>
        <div className={styles.header}>
          <h3 data-aos="fade-up" data-aos-delay="400">
            Say Hello!
          </h3>
        </div>

        <div className={styles.info}>
          <p data-aos="fade-up" data-aos-delay="500">
            Tell me whatever you want! If you have a project, be free to contact
            me, i'll try my best to make it for you.
          </p>
        </div>

        <a
          href="mailto:stylesshjs@gmail.com"
          className={styles.mail_btn}
          data-aos="fade-in"
          data-aos-delay="800"
        >
          Get in touch
        </a>
      </section>
    </>
  );
};

export default HomeContact;
