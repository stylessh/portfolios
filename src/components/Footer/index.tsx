import styles from "@Styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Got an interesting project? I can help you.</p>
      <div className={styles.line}></div>

      <div className={styles.grid_3}>
        <div className="ig wow fadeInUp">
          <h3>connect with me</h3>
          <p>ig @but.first.books</p>
        </div>

        <div className="media wow fadeInUp">
          <h3>follow me</h3>
          <div className={styles.icons}>
            <a
              href="https://www.instagram.com/but.first.books/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/stylesshDev" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/danielStrecci">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="email wow fadeInUp">
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
