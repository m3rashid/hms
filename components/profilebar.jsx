import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,NavbarBrand,NavItem,Nav } from "reactstrap";

import * as profileBarStyles from "./styles/profileBar.module.css";

const ProfileBar = (props) => {
  const imgSource= "/images/"+`${props.profileImg}`+".jpg"
  return (
    <div>
       <div style={{
            display: 'block', width: '100%', padding: '5px' ,borderRadius: '50%',
        }}>
            
            <Navbar color="dark" light  >
                <NavbarBrand href="/reception">
                <img
              src={imgSource}
              alt=""
              width={80}
              height={80}
              style={{ borderRadius: "100%" }}
              />
              </NavbarBrand>
                
                    <Nav className="mr-auto" navbar >
                        <NavItem className={profileBarStyles.navBar} >
                          Name: {props.profileName}
                        </NavItem>
                        <NavItem className={profileBarStyles.navBar}>
                          Id: {props.profileId}  
                        </NavItem>
                    </Nav>
               
            </Navbar>
        </div >
    </div>
  );
};


export default ProfileBar;
