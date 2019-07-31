import React from "react";
import { Menu } from "./../Menu/Menu";

/** Componente stateless de barra lateral de menu */
const SideBar = () => (
  <div className="side-bar">
    <div className="icon">
      <a href="https://tradersclub.com.br">
        <div className="icon-tc" />
      </a>
    </div>
    <Menu />
  </div>
);

export default SideBar;
