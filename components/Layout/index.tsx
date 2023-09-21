import Link from "next/link";
import React, { FC } from "react";
import Navbar from "@components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer className="container text-center">
        <p>All rights reserved</p>
      </footer>
    </>
  );
};

export default Layout;
