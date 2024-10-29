import Head from "next/head";
import Layout from "../components/layouts/Layout";
import "../styles/globals.css";
import { Lexend } from "@next/font/google";

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "fallback",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cesar Pizarra | Portfolio</title>
        <meta
          name="description"
          content="Cesar Pizarra is a Full-stack Web Developer passionate about creating visually appealing and user-friendly websites. Explore my portfolio to see my work and learn more about my skills and projects."
        />

        <meta
          name="keywords"
          content="cezaru, cesar pizarra, cesar, pizarra,"
        />
        <meta name="author" content="cezaru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/my-logo.png" />
      </Head>
      <style jsx global>
        {`
          html {
            font-family: ${lexend.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
