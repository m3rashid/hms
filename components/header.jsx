import React from "react";
import { Burger, Header, MediaQuery } from "@mantine/core";

const TopHeader = ({ opened, setOpened, theme }) => {
  return (
    <Header height={70} padding="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <h1>Ansari Hospital</h1>
      </div>
    </Header>
  );
};

export default TopHeader;
