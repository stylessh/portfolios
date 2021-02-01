import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import AOS from "aos";

import "../styles/globals.scss";
import "markdown/styles.scss";
import "aos/dist/aos.css";

import Navbar from "@Components/Navbar";
import isMobile from "@Utils/isMobile";

// components styles
import "@Styles/components/Footer.scss";
import "@Styles/spinner.scss";
import "@Styles/components/Hamburguer.scss";
import "@Styles/components/Navbar.scss";

import "@Styles/components/Hero.scss";
import "@Styles/components/Projects.scss";
import "@Styles/components/Contact.scss";
import "@Styles/components/About.scss";
import "@Styles/components/Repositories.scss";

import "@Styles/Post.scss";
import "@Styles/ViewPosts.scss";

import "@Styles/components/Cursor.scss";

import "@Styles/components/Button.scss";

// loading spinner
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const luxy = require("luxy.js");

    if (!isMobile()) {
      luxy.init({
        wrapper: ".app",
        wrapperSpeed: 0.02,
      });
    }

    AOS.init({
      mirror: true,
      easing: "ease-in-out-sine",
    });
  }, []);

  return (
    <div className="app">
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
