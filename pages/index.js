import Head from "next/head";
import { Inter } from "next/font/google";
import About from "../components/About";
import Main from "/components/Main.tsx";
import Skills from "../components/Skills.tsx";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khaled Hazem | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/navbar assets/logoxx.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
