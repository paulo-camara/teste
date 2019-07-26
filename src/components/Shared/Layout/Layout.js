import React from "react";

import SideBar from "./../SideBar/SideBar";

const Layout = ({ children }) => (
  <div className="layout">
    <SideBar />
    <div className="content">{children}</div>
  </div>
);

export default Layout;
