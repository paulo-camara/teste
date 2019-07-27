import React from "react";
import { Link } from "react-router-dom";

/** Componente de item do menu de navegação */
const ItemMenu = ({ path, text }) => (
  <li className="item-menu">
    <Link className="menu-link" to={`/${path}`}>{text}</Link>
  </li>
);

export default ItemMenu;
