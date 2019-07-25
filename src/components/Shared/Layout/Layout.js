import React from "react";

import SideBar from "./../SideBar/SideBar";

const Layout = ({ children }) => (
  <div className="layout">
    <SideBar />
    {children}
  </div>
);

export default Layout;
