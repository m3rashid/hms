import React from "react";

import classes from "./header.module.css";

const TopHeader = ({ opened, setOpened, theme }) => {
  return (
    <header className={classes.outer}>
      <h1>Ansari Hospital</h1>
    </header>
  );
};

export default TopHeader;
