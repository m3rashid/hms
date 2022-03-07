import React from "react";
import { Navbar, Text, Container } from "@mantine/core";
import {
  GearIcon,
  PlusCircledIcon,
  Pencil2Icon,
  TableIcon,
  PersonIcon,
  HomeIcon,
} from "@modulz/radix-icons";
import Link from "next/link";

const textStyle = {
  fontSize: "1.2rem",
  marginLeft: "10px",
  width: "100%",
};

const SidebarNavigation = ({ opened }) => {
  return (
    <Navbar
      padding="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 250, lg: 300 }}
      style={{
        bottom: 0,
      }}
    >
      <Link href="/" passHref>
        <Container className="leftSidebarInnerContainer">
          <HomeIcon height="25" width="25" />
          <Text style={textStyle}>Home</Text>
        </Container>
      </Link>
      <Link href="/admin" passHref>
        <Container className="leftSidebarInnerContainer">
          <GearIcon height="25" width="25" />
          <Text style={textStyle}>Admin</Text>
        </Container>
      </Link>
      <Link href="/doctor" passHref>
        <Container className="leftSidebarInnerContainer">
          <PlusCircledIcon height="25" width="25" />
          <Text style={textStyle}>Doctor</Text>
        </Container>
      </Link>
      <Link href="/reception" passHref>
        <Container className="leftSidebarInnerContainer">
          <Pencil2Icon height="25" width="25" />
          <Text style={textStyle}>Reception</Text>
        </Container>
      </Link>
      <Link href="/pharmacy" passHref>
        <Container className="leftSidebarInnerContainer">
          <TableIcon height="25" width="25" />
          <Text style={textStyle}>Pharmacy</Text>
        </Container>
      </Link>
      <Link href="/patient" passHref>
        <Container className="leftSidebarInnerContainer">
          <PersonIcon height="25" width="25" />
          <Text style={textStyle}>Patient</Text>
        </Container>
      </Link>
    </Navbar>
  );
};

export default SidebarNavigation;
