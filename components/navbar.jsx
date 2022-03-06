import React from "react";
import { Navbar, Text } from "@mantine/core";

const SidebarNavigation = ({ opened }) => {
  return (
    <Navbar
      padding="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 300, lg: 400 }}
    >
      <Text>Admin</Text>
      <Text>Doctor</Text>
      <Text>Reception</Text>
      <Text>Pharmacy</Text>
    </Navbar>
  );
};

export default SidebarNavigation;
