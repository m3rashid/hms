import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";

import { FaStoreAlt, FaRegHeart, FaSignal, FaUserAlt } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={`${classes["sidebar-container"]} `}>
        <ProSidebar width={200}>
          <SidebarContent>
            <Menu iconShape="square">
              <Link href="/" passHref>
                <MenuItem active={true} icon={<FiHome />}>
                  Home
                </MenuItem>
              </Link>
              <Link href="/reception" passHref>
                <MenuItem icon={<FaSignal />}>Reception</MenuItem>
              </Link>
              <Link href="/doctor" passHref>
                <MenuItem icon={<FaRegHeart />}>Doctor</MenuItem>
              </Link>
              <Link href="/pharmacy" passHref>
                <MenuItem icon={<FaStoreAlt />}>Pharmacy</MenuItem>
              </Link>
              <Link href="/admin" passHref>
                <MenuItem icon={<BiCog />}>Admin</MenuItem>
              </Link>
              <Link href="/patient" passHref>
                <MenuItem icon={<FaUserAlt />}>Patient</MenuItem>
              </Link>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            {/* check if user logged in */}
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
