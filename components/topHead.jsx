import Image from "next/image";
import React from "react";

import * as topHeadStyles from "./styles/topHead.module.css";

const TopHead = () => {
  return (
    <>
      <div className={topHeadStyles.outerContainer}>
        <div className={topHeadStyles.innerContainer}>
          <div className={topHeadStyles.imageContainer}>
            <Image src="/images/doctor.jpg" alt="" width={100} height={100} />
          </div>
          <div
            style={{
              padding: "0 20px",
            }}
          >
            <p>Name</p>
            <p>Class</p>
          </div>
        </div>
        <div>Logout</div>
      </div>
    </>
  );
};

export default TopHead;
