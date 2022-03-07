import { Container, Image } from "@mantine/core";
import Head from "next/head";
import DetailCard from "../components/card";

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  marginBottom: "50px",
};

function Home() {
  return (
    <>
      <Head>
        <title>Home - Ansari hospital</title>
      </Head>
      <Container fluid style={containerStyle}>
        <Image
          src="/images/hospital.jpeg"
          height={500}
          alt="hospital"
          style={{ width: "100%", objectFit: "none" }}
        />
      </Container>
      <Container fluid style={containerStyle}>
        <DetailCard
          imageSrc="/images/reception.jpg"
          imageAlt=""
          buttonTitle="Reception"
          buttonClick={() => console.log("this")}
        />
        <DetailCard
          imageSrc="/images/doctor.jpg"
          imageAlt=""
          buttonTitle="Doctor"
        />
        <DetailCard
          imageSrc="/images/pharmacy.jpg"
          imageAlt=""
          buttonTitle="Pharmacy"
        />
        <DetailCard
          imageSrc="/images/admin.jpeg"
          imageAlt=""
          buttonTitle="Admin"
        />
      </Container>
    </>
  );
}

export default Home;
