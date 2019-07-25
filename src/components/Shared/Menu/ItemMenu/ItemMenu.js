import React from "react";
import { Link } from "react-router-dom";

const ItemMenu = ({ path, text }) => (
  <li className="item-menu">
    <Link to={`/${path}`}>{text}</Link>
  </li>
);

export default ItemMenu;
