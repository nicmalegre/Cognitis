import React, {useState} from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { FaBuffer, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import "../Sidebar/Sidebar.css";
import {Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Sidebar = () => {
 
    let [sidebarVisible, setVisibility] = useState(true)

    const visibilityOn = () => {
        setVisibility(true)
    }
    const visibilityOff = () => {
        setVisibility(false)
    }
 
 
  return (
    (sidebarVisible) ? <>
    
    <ProSidebar id="sidebar-container">
      <br />
      <SidebarContent id="bg">
        <Menu id="bg" iconShape="square">
          <MenuItem className="font-weight-bold text-white">
            <i className="mr-1">
            <FaBuffer/>
            </i>
            Control de Catálogo
          </MenuItem>
          <hr />
          <Link id="newprod" to="catalog/newproduct"><MenuItem className="ml-5 text-white">Nuevo Producto</MenuItem></Link>
          <Link id="buscarprod" to="/catalog/searchproducts"><MenuItem className="ml-5 text-white">Buscar Producto</MenuItem></Link>
          <Link id="masiva" to="#"><MenuItem className="ml-5 text-white">Alta Masiva</MenuItem></Link>
          
          <br/><br/>
          <MenuItem className="font-weight-bold text-white">
            <i className="mr-1">
              <FiMoreVertical />
            </i>
            Secciones y Categorías
          </MenuItem>
          <hr />
          <MenuItem className="ml-5 text-white">Buscar Sec y Cat</MenuItem>
          <MenuItem className="ml-5 text-white">Nueva Sección</MenuItem>
          <MenuItem className="ml-5 text-white">Nueva Categoría</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
    {/* <Button id="button-visible" onClick={visibilityOff}/> */}
    <i id="button-visible" onClick={visibilityOff}><AiFillLeftCircle id="icon"/></i>
    </>
    : <i id="button-invisible" onClick={visibilityOn}><AiFillRightCircle id="icon" /></i>
  );
};

export default Sidebar;
