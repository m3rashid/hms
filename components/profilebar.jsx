import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody } from "reactstrap";
import Image from "next/image";

const ProfileBar = (props) => {
  return (
    <div
      style={{
        padding: 10,
        fontSize: "20px",
      }}
    >
      <Card>
        <CardBody>
          <div>
            <Image
              src="/images/doctor.jpg"
              alt=""
              width={80}
              height={80}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>Name: {props.profileName}</div>
          <div>Id: {props.profileId}</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileBar;
