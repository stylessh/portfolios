import { FC, useRef } from "react";

const HomeAbout: FC = () => {
  let about = useRef(null);

  return (
    <>
      <div id="about"></div>
      <section className="about" ref={about}>
        <div className="grid_2">
          <article className="info">
            <div className="header">
              <div className="mask">
                <h2 data-aos="fade-up">About me.</h2>
              </div>

              <div className="line" data-aos="fade-up"></div>
            </div>

            <div className="me">
              <div className="mask">
                <p data-aos="fade-up" data-aos-delay="400">
                  I enjoy creating things that live on the internet, whether
                  that be websites, applications, etc.
                </p>
              </div>

              <div className="mask">
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

            <div className="technologies">
              <div className="mask">
                <p data-aos="fade-up" data-aos-delay="600">
                  Here are a few technologies I've been working with recently:
                </p>
              </div>

              <div className="list">
                <ul className="left" data-aos="fade-in" data-aos-delay="800">
                  <li>Javascript (ES6+)</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </ul>
                <ul className="right" data-aos="fade-in" data-aos-delay="900">
                  <li>Svelte</li>
                  <li>Typescript</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </article>

          <div className="image">
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
