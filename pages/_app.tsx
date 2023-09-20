import type { AppProps } from "next/app";
import Layout from "../components/Layout";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
