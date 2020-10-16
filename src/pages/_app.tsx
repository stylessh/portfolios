import { useEffect, useRef } from "react";
import Router from "next/router";
import NProgress from "nprogress";

import "@Styles/spinner.scss";
import "../styles/globals.scss";
import "markdown/styles.scss";

import useWindowSize from "hooks/useWindowSize";
import isMobile from "utils/isMobile";

import Navbar from "@Components/Navbar";

// loading
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.2,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  //set the height of the body.
  useEffect(() => {
    if (!isMobile) setBodyHeight();
  }, [size.height]);

  useEffect(() => {
    const skew = () => {
      setTimeout(() => {
        setBodyHeight();
        requestAnimationFrame(() => skewScrolling());
      }, 200);
    };

    if (!isMobile()) {
      skew();

      Router.events.on("routeChangeComplete", skew);

      return () => {
        Router.events.off("routeChangeComplete", skew);
      };
    } else {
      // if is mobile, set normal scroll
      const appContainer = app.current as any;

      appContainer.style.position = "static";
    }

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
  }, []);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    const scroll = scrollContainer.current as any;

    document.body.style.height = `${scroll.getBoundingClientRect().height}px`;
  };

  // Scrolling
  const skewScrolling = () => {
    const scroll = scrollContainer.current as any;

    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scroll.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div className="app" ref={app}>
      <Navbar />

      <div className="scroll" ref={scrollContainer}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
