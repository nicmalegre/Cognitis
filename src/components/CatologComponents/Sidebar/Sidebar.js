import React,{useState} from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
//import { FaHeart } from "react-icons/fa";
import "../Sidebar/Sidebar.css";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [sidebarOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!sidebarOpen);
  const Styles = {
    width: '0px'
}
  
  return (
    <ProSidebar id="sidebar-container" toggled={true} with={Styles.width} >
      <i className="ml-auto p-3" ><FiMenu /></i>
      <SidebarHeader></SidebarHeader>
      <SidebarContent id="bg">
        <Menu id="bg" iconShape="square">
        <MenuItem className="font-weight-bold text-white">Productos</MenuItem>
            <MenuItem className="ml-3">Nuevo Producto</MenuItem>
            <MenuItem className="ml-3">Buscar Producto</MenuItem>
            <MenuItem className="ml-3">Costos y Precios</MenuItem>
        <MenuItem className="font-weight-bold text-white">Promociones</MenuItem>
            <MenuItem className="ml-3">Nueva Promocion</MenuItem>
            <MenuItem className="ml-3">Buscar Promocion</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
