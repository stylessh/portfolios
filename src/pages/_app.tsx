import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import "markdown/styles.scss";

import useWindowSize from "hooks/useWindowSize";

import Navbar from "@Components/Navbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
    setBodyHeight();
  }, [size.height]);

  useEffect(() => {
    const skew = () => {
      setTimeout(() => {
        setBodyHeight();
        requestAnimationFrame(() => skewScrolling());
      }, 100);
    };

    skew();

    router.events.on("routeChangeComplete", skew);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", skew);
    };
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
