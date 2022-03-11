import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { FaStoreAlt, FaRegHeart, FaSignal, FaUserCog } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import { useSession } from "next-auth/react";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const { data: session, status } = useSession();
  const user = {
    loggedIn: true,
    level: "ADMIN",
  };

  console.log({ session, status });

  const admin = user.loggedIn && user.level === "ADMIN";

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
              {/* <Link href="/patient" passHref>
                <MenuItem icon={<FaUserAlt />}>Patient</MenuItem>
              </Link> */}
              {admin && <div className={classes["admin-break"]}></div>}
              <Link href="/admin" passHref>
                <MenuItem icon={<FaUserCog />}>
                  Admin {admin && "Home"}
                </MenuItem>
              </Link>
              {admin && (
                <div className={classes["admin-routes"]}>
                  <Link href="/admin/receptionists" passHref>
                    <div>
                      <BiCog /> Receptionists
                    </div>
                  </Link>
                  <br />
                  <Link href="/admin/doctors" passHref>
                    <div>
                      <BiCog /> Doctors
                    </div>
                  </Link>
                  <br />
                  <Link href="/admin/patients" passHref>
                    <div>
                      <BiCog /> Patients
                    </div>
                  </Link>
                  <br />
                </div>
              )}
            </Menu>
          </SidebarContent>
          {user.loggedIn && (
            <SidebarFooter>
              <Menu>
                <MenuItem>AUTH as {user.level}</MenuItem>
              </Menu>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Menu>
            </SidebarFooter>
          )}
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
