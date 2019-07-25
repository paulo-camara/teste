import React from "react";
import ItemMenu from "./ItemMenu/ItemMenu";

const PAGES = [
  { path: "home", text: "Home" },
  { path: "list-car", text: "Lista de carros" },
  { path: "create-car", text: "Cadastrar um veiculo" }
];

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
