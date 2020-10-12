import React from "react";

import styles from "@Styles/components/Contact.module.scss";

const HomeContact = () => {
  return (
    <>
      <div id="contact"></div>
      <section className={styles.contact}>
        <div className={styles.header}>
          <h3>Say Hello!</h3>
        </div>

        <div className={styles.info}>
          <p>
            Tell me whatever you want! If you have a project, be free to contact
            me, i'll try my best to make it for you.
          </p>
        </div>

        <a href="mailto:stylesshjs@gmail.com" className={styles.mail_btn}>
          Get in touch
        </a>
      </section>
    </>
  );
};

export default HomeContact;
