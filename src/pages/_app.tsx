import { useEffect, useRef } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import AOS from "aos";

import "@Styles/spinner.scss";
import "../styles/globals.scss";
import "markdown/styles.scss";
import "aos/dist/aos.css";

import Navbar from "@Components/Navbar";
import Cursor from "@Components/Cursor";

// loading
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  // Ref for parent div and scrolling div
  const app = useRef();

  useEffect(() => {
    AOS.init({
      mirror: true,
      easing: "ease-in-out-sine",
    });
  }, []);

  useEffect(() => {
    const luxy = require("luxy.js");

    luxy.init({
      wrapper: ".app",
      wrapperSpeed: 0.05,
    });
  }, []);

  return (
    <div className="app" ref={app}>
      <Cursor />
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
