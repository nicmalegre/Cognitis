import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FcViewDetails } from "react-icons/fc";
import { FaBuffer } from "react-icons/fa";
import { FiMoreVertical, FiMenu } from "react-icons/fi";
import "../InvisibleSidebar/InvisibleSidebar.css";
import {Link } from "react-router-dom";
import {Button} from 'reactstrap'


const InvisibleSidebar = () => {
  return (
    <ProSidebar id="sidebar-container">
      <i className="ml-auto p-3">
        <FiMenu />
      </i>
    </ProSidebar>
  );
};

export default InvisibleSidebar;
