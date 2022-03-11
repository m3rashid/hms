import React from "react";
import { Button } from "reactstrap";
import Link from "next/link";

const LoginError = (props) => {
  return (
    <React.Fragment>
      <div
        className={`w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center`}
      >
        <div
          className={`d-flex flex-column justify-content-center align-items-center p-2`}
        >
          <p className={`h4`}>
            Please Login as
            <span className={`text-primary mx-2`}>{props.level}</span>
            to access this page
          </p>
          <Link href={"/"}>
            <Button className={`my-3`} color={"primary"}>
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginError;
