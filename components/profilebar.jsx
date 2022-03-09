import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";

import * as profileBarStyles from "./styles/profileBar.module.css";

const ProfileBar = ({ profileImg, profileName, profileId }) => {
  return (
    <div>
      <div
        style={{
          display: "block",
          width: "100%",
        }}
      >
        <Navbar color="dark" light>
          <NavbarBrand href="/reception">
            <img
              src={profileImg}
              alt="Avatar"
              width={80}
              height={80}
              style={{ borderRadius: "100%" }}
            />
          </NavbarBrand>

          <Nav className="mr-auto" navbar>
            <NavItem className={profileBarStyles.navBar}>
              Name: {profileName}
            </NavItem>
            <NavItem className={profileBarStyles.navBar}>
              Id: {profileId}
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default ProfileBar;
