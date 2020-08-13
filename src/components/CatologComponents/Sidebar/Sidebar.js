import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaProductHunt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <ProSidebar id="sidebar-container">
      {/*<i className="ml-auto p-3">
        <FiMenu />
        </i>*/}
      <br />
      <SidebarContent id="bg">
        <Menu id="bg" iconShape="square">
          <MenuItem className="font-weight-bold text-white">
            <i className="mr-1">
              <FaProductHunt />
            </i>
            Productos
          </MenuItem>
          <hr />
          <MenuItem className="ml-5 text-white">Nuevo Producto</MenuItem>
          <MenuItem className="ml-5 text-white">Buscar Producto</MenuItem>
          <MenuItem className="ml-5 text-white">Costos y Precios</MenuItem>
          <br/><br/>
          <MenuItem className="font-weight-bold text-white">
            <i className="mr-1">
              <FiMoreVertical />
            </i>
            Promociones
          </MenuItem>
          <hr />
          <MenuItem className="ml-5 text-white">Nueva Promocion</MenuItem>
          <MenuItem className="ml-5 text-white">Buscar Promocion</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Sidebar;
