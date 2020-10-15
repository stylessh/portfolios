import React, { FC } from "react";

const Layout: FC = ({ children }: any) => {
  return (
    <>
      <main className="wrapper">{children}</main>
    </>
  );
};

export default Layout;
