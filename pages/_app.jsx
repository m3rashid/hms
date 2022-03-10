import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import Sidebar from "../components/Sidebar/Sidebar";
import TopHeader from "../components/header/header";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />

      <TopHeader />
      <Sidebar />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
