import React from "react";
import Head from "next/head";
import ProfileBar from "../../components/profilebar";

const Doctor = () => {
  return (
    <>
      <Head>
        <title>Doctors - Ansari hospital</title>
      </Head>
      <ProfileBar
        profileName="Doctor Name"
        profileId="RS78787"
        profileImg="/images/doctor.jpg"
      />
      <div>Doctor</div>
    </>
  );
};

export default Doctor;
