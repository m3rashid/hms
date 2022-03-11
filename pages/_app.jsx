import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import "../styles/theme.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import TopHeader from "../components/header/header";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

const MyApp = ({ Component, session, pageProps }) => {
  return (
    <SessionProvider session={session}>
      <ToastContainer />

      <TopHeader />
      <Sidebar />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
