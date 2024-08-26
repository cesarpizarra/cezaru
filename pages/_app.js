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
