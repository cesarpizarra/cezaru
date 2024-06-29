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
        <meta
          name="description"
          content="Cesar Pizarra is an aspiring frontend web developer passionate about creating visually appealing and user-friendly websites. Explore my portfolio to see my work and learn more about my skills and projects."
        />

        <meta
          name="keywords"
          content="cezaru, cesar pizarra, cesar, pizarra,"
        />
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
