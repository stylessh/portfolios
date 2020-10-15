import React, { FC } from "react";
import Navbar from "@Components/Navbar";

const Layout: FC = ({ children }: any) => {
  return (
    <>
      <Navbar />

      <main className="wrapper">{children}</main>
    </>
  );
};

export default Layout;
