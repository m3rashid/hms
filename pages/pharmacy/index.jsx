import React from "react";
import Head from "next/head";
import ProfileBar from "../../components/profilebar";

const Pharmacy = () => {
  return (
    <>
      <Head>
        <title>Pharmacy - Ansari hospital</title>
      </Head>
      <ProfileBar
        profileName="Reception"
        profileId="RS78787"
        profileImg="/images/pharmacy.jpg"
      />
      <div>Pharmacy</div>
    </>
  );
};

export default Pharmacy;
