import React, { FC } from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Layout: FC = ({ children }: any) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ...transition,
          delay: 0.4,
        }}
        className="wrapper"
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
