import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import styles from "@Styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text} data-aos="fade-right" data-aos-delay="300">
        Got an interesting project? I can help you.
      </p>
      <div className={styles.line}></div>

      <div className={styles.grid_3}>
        <div
          className="ig"
          data-aos="fade-in"
          data-aos-offset="50"
          data-aos-delay="400"
        >
          <h3>connect with me</h3>
          <p>ig @lateegram</p>
        </div>

        <div
          className="media"
          data-aos="fade-in"
          data-aos-offset="50"
          data-aos-delay="450"
        >
          <h3>follow me</h3>
          <div className={styles.icons}>
            <a
              href="https://www.instagram.com/lateegram/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/stylesshDev"
              data-aos-offset="50"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/danielStrecci">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="email" data-aos="fade-in" data-aos-delay="500">
          <h3>say hello</h3>
          <p>
            <a href="mailto:stylesshjs@gmail.com">Send an email</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
