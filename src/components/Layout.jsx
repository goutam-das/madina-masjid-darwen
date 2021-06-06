import React, { Fragment } from "react";
import GlobalStyle from "../styles/GlobalStyle";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  );
};

export default Layout;
