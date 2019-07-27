import React from "react";
import ItemMenu from "./ItemMenu/ItemMenu";

/** Constante de paginas com text (nome a exibir no menu e 
 * route (rota em que será redirecionada)) */
const PAGES = [
  { path: "home", text: "Home" },
  { path: "list", text: "Lista de carros" },
  { path: "detail-car", text: "Cadastrar um veiculo" }
];

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
