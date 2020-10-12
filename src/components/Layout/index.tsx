import React from "react";
import Navbar from "@Components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default Layout;
