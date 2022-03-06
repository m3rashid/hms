import DetailCard from "../components/card";
import { Container } from "@mantine/core";

function Home() {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <DetailCard
        imageSrc="/images/reception"
        imageAlt=""
        buttonTitle="Reception"
        buttonClick={() => console.log("this")}
      />
      <DetailCard imageSrc={null} imageAlt="" buttonTitle="Doctor" />
      <DetailCard imageSrc={null} imageAlt="" buttonTitle="Pharmacy" />
      <DetailCard imageSrc={null} imageAlt="" buttonTitle="Admin" />
    </Container>
  );
}

export default Home;
