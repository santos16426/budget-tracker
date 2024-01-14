import Layout from "@/components/Layout";
import { AppProvider } from "@/context";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Head>
          <title>Budget Tracker</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
