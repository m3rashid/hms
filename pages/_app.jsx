import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
