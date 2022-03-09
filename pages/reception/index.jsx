import React from "react";
import Head from "next/head";

import TopHead from "../../components/topHead";
import ProfileBar from "../../components/profilebar";
import ReceptionForm from "../../components/reception/reception";

const Reception = () => {
  const props = {
    profileName: "Reception",
    profileId: "RS78787",
    profileImg: "reception",
  };

  return (
    <>
      <Head>
        <title>Reception - Ansari hospital</title>
      </Head>
      {/* <TopHead /> */}
      <ProfileBar {...props} />
      <ReceptionForm />
    </>
  );
};

export default Reception;
