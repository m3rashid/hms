import React from "react";

import classes from "./header.module.css";
import Login from "../login/login";

const TopHeader = ({ opened, setOpened, theme }) => {
  return (
    <header className={classes["outer"]}>
      <h1>Ansari Hospital</h1>
      <div className={classes["login"]}>
        <Login />
      </div>
    </header>
  );
};

export default TopHeader;
