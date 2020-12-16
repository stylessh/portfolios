import React, { FC } from "react";


const HomeContact: FC = () => {
  return (
    <section className="contact">
      <div className="header">
        <h3 data-aos="fade-up" data-aos-delay="400">
          Say Hello!
        </h3>
      </div>

      <div className="info">
        <p data-aos="fade-up" data-aos-delay="500">
          Tell me whatever you want! If you have a project, be free to contact
          me, i'll try my best to make it for you.
        </p>
      </div>

      <a
        href="mailto:stylesshjs@gmail.com"
        className="mail_btn"
        data-aos="fade-in"
        data-aos-delay="800"
      >
        Get in touch
      </a>
    </section>
  );
};

export default HomeContact;
