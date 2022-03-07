import "../styles/globals.css";
import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import SidebarNavigation from "../components/navbar";
import TopHeader from "../components/header";

function MyApp({ Component, pageProps }) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <ModalsProvider>
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={<SidebarNavigation opened={opened} />}
        header={
          <TopHeader opened={opened} setOpened={setOpened} theme={theme} />
        }
      >
        <Component {...pageProps} />
      </AppShell>
    </ModalsProvider>
  );
}

export default MyApp;
