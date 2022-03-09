import Sidebar from "../components/Sidebar/Sidebar";
import TopHeader from "../components/header/header";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopHeader />
      <Sidebar />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
