import React from "react";

const ItemMenu = ({ path, text }) => (
  <li className="item-menu">
    <a to={`/${path}`}>
      <span>{text}</span>
    </a>
  </li>
);

export default ItemMenu;
