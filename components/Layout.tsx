import Header from "./Header";
import Footer from "./Footer";
import React from "react";

import styles from "@/styles/runners.module.scss";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
