import React from "react";
import Head from "next/head";

import ProfileBar from "../../components/profilebar";
import CreatePatient from "../../components/reception/createPatient";
import CreateAppointment from "../../components/reception/createAppointment";

const Reception = () => {
  return (
    <>
      <Head>
        <title>Reception - Ansari hospital</title>
      </Head>
      <ProfileBar
        profileName="Reception"
        profileId="RS78787"
        profileImg="/images/reception.jpg"
      />
      <CreatePatient />
      <CreateAppointment />
    </>
  );
};

export default Reception;
