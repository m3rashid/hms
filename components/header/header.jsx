import React from "react";
import classes from "./header.module.css";
import Login from "../login/login";
import Image from "next/image";

const handleClick = () => {
  window.location.href = "/";
};

const TopHeader = ({ opened, setOpened, theme }) => {
  return (
    <header className={classes["outer"]}>
      <div className={classes["inner"]}>
        <div>
          <Image
            src="/images/logo.jpg"
            alt=""
            width="50px"
            height="50px"
            className={classes["Img"]}
            onClick={() => handleClick()}
          />
        </div>
        <div className={classes["title"]}>Dr. M.A. Ansari Health Centre</div>
      </div>
      <div className={classes["login"]}>
        <Login />
      </div>
    </header>
  );
};

export default TopHeader;
