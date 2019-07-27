import React from "react";
import PropTypes from "prop-types";
import SideBar from "./../SideBar/SideBar";

/** Componente stateless de layout base para todas a telas */
const Layout = ({ children }) => (
  <div className="layout">
    <SideBar />
    <div className="content">{children}</div>
  </div>
);

/** Propriedades necessarias para a utilização do Layout */
Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
