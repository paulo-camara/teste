import React from "react";
import { Menu } from "./../Menu/Menu";

/** Componente stateless de barra lateral de menu */
const SideBar = () => (
  <div className="side-bar">
    <div className="icon">
      <div className="icon-tc" />
    </div>
    <Menu />
  </div>
);

export default SideBar;
