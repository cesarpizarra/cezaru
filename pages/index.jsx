import Head from "next/head";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contacts from "../components/sections/Contacts";
import Work from "../components/sections/Work";
import StarCanvas from "../components/StarCanvas";

export default function Home() {
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
      <main className="relative z-20 mx-auto max-w-6xl px-5 md:px-10 lg:px-12 xl:px-0">
        <StarCanvas />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contacts />
      </main>
    </>
  );
}
