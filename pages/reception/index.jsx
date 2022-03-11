import React from "react";
import Head from "next/head";

import { useSession } from "next-auth/react";

import { Level } from "@prisma/client";
import LoginError from "../../components/LoginError/LoginError";
import ProfileBar from "../../components/profilebar";
import CreatePatient from "../../components/reception/createPatient";
import CreateAppointment from "../../components/reception/createAppointment";

const Reception = () => {
  const { data: session } = useSession();

  if (session?.user?.level !== Level.RECEPTIONIST) {
    return (
      <React.Fragment>
        <LoginError level={Level.RECEPTIONIST} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Reception;
