import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart } from "react-icons/fa";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <ProSidebar id="sidebar-container">
      <SidebarHeader></SidebarHeader>
      <SidebarContent id="bg">
        <Menu id="bg" iconShape="square">
        <SubMenu  id="bg"title="Productos" icon={<FaHeart />} > 
            <MenuItem id="bg">Nuevo Producto</MenuItem>
            <MenuItem id="bg">Buscar Producto</MenuItem>
            <MenuItem id="bg">Costos y Precios</MenuItem>
          </SubMenu>
        <SubMenu title="Promociones" icon={<FaHeart />}>
            <MenuItem>Nuevo Promocion</MenuItem>
            <MenuItem>Buscar Promocion</MenuItem>
          </SubMenu>
          <SubMenu title="Extras" icon={<FaHeart />}>
            <MenuItem>Cartacteristicas Especiales</MenuItem>
            <MenuItem>Vista de Ficha</MenuItem>
            <MenuItem>Req. de Garantia</MenuItem>
            <MenuItem>Iniciar un Pedido</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
