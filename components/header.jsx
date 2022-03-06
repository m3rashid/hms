import React from "react";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
  MantineProvider,
} from "@mantine/core";

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

        <Text>Ansari Hospital</Text>
      </div>
    </Header>
  );
};

export default TopHeader;
