import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import DetailCard from "../components/card";
import Login from "../components/login/login";

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  marginBottom: "50px",
};

const Home = () => {
  const router = useRouter();
  const userLoggedIn = true;

  const handleAuth = (e) => {
    const type = e.target.innerText.toLowerCase();
    if (userLoggedIn) {
      router.push(`/${type}`);
    } else {
      // open the auth modal
    }
  };

  return (
    <>
      <Head>
        <title>Home - Ansari hospital</title>
      </Head>
      <div style={containerStyle}>
        <Image
          src="/images/hospital.jpeg"
          alt="hospital"
          width={100}
          height={100}
        />
      </div>
      <Login />
      <div style={containerStyle}>
        <DetailCard
          imageSrc="/images/reception.jpg"
          imageAlt=""
          buttonTitle="Reception"
          buttonClick={handleAuth}
        />
        <DetailCard
          imageSrc="/images/doctor.jpg"
          imageAlt=""
          buttonTitle="Doctor"
          buttonClick={handleAuth}
        />
        <DetailCard
          imageSrc="/images/pharmacy.jpg"
          imageAlt=""
          buttonTitle="Pharmacy"
          buttonClick={handleAuth}
        />
        <DetailCard
          imageSrc="/images/admin.jpeg"
          imageAlt=""
          buttonTitle="Admin"
          buttonClick={handleAuth}
        />
      </div>
    </>
  );
};

export default Home;
