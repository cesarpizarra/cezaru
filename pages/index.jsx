import Head from "next/head";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contacts from "../components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cesar Pizarra | Portofolio</title>
        <meta name="author" content="cezaru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/my-logo.png" />
      </Head>
      <main className="relative max-w-6xl px-5 md:px-10 lg:px-12 xl:px-0 mx-auto z-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}
