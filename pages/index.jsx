import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import DetailCard from "../components/card/card";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
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
          src="/images/center.jpg"
          alt="hospital"
          height={300}
          width={1280}
        />
      </div>
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

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
