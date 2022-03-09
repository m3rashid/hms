import React from "react";
import Head from "next/head";

import TopHead from "../../components/topHead";
import ProfileBar from "../../components/profilebar";

const Reception = () => {

   const props={
    profileName:'Reception',
    profileId:'RS78787',
   }
  return (
    <>
      <Head>
        <title>Reception - Ansari hospital</title>
      </Head>
      {/* <TopHead /> */}
      <ProfileBar {...props}/>
    </>
  );
};

export default Reception;
