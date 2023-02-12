import React from "react";
import { Layout as AntLayout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
/* import { motion } from "framer-motion"; */

const Layout = ({ pageProps, Component, Head }) => (
/*   <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  > */
  <AntLayout>
    <Header />
    <AntLayout.Content>
      <Component {...pageProps} Head={Head}/>
    </AntLayout.Content>
    <Footer />
  </AntLayout>
  /*   </motion.div> */

);

export default Layout;