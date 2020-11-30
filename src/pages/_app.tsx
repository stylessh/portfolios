import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import AOS from "aos";

import "@Styles/spinner.scss";
import "../styles/globals.scss";
import "markdown/styles.scss";
import "aos/dist/aos.css";

import Navbar from "@Components/Navbar";
import Cursor from "@Components/Cursor";
import isMobile from "@Utils/isMobile";

// loading
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      mirror: true,
      easing: "ease-in-out-sine",
    });
  }, []);

  useEffect(() => {
    const luxy = require("luxy.js");

    if (!isMobile()) {
      luxy.init({
        wrapper: ".app",
        wrapperSpeed: 0.02,
      });
    }
  }, []);

  return (
    <div className="app">
      {/* <Cursor /> */}
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
