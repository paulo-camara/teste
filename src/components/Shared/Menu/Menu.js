import React from "react";
import ItemMenu from "./ItemMenu/ItemMenu";
import { PAGES } from './../../contants';

/** Componente stateless de menu lateral */
export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        {PAGES.map(({ path, text }, index) => (
          <ItemMenu key={index} path={path} text={text} />
        ))}
      </ul>
    </div>
  );
};
