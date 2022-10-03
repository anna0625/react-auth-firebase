import React from "react";
import { Navbar } from "./Navbar";

type Props = {
  children: JSX.Element | React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="mx-14">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
