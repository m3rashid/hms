import React from "react";
import Head from "next/head";
import ProfileBar from "../../components/profilebar";

const Patient = () => {
  return (
    <>
      <Head>
        <title>Patients - Ansari hospital</title>
      </Head>
      <ProfileBar
        profileName="Patient Name"
        profileId="RS78787"
        profileImg="/images/doctor.jpg"
      />
      <div>Patient</div>
    </>
  );
};

export default Patient;
