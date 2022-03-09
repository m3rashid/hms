import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody } from "reactstrap";

const ProfileBar = (props) => {
  return (
    <div  style={{
      padding: 10,
      fontSize:'20px',
    }}>
      <Card >
        <CardBody >
          <div>
            <img
              src="/images/doctor.jpg"
              alt=""
              width="80px"
              height="80px"
              style={{ borderRadius: "100%", display: "block" }}
            />
          </div>
          <div >Name: {props.profileName}</div>
          <div>Id: {props.profileId}</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileBar;
