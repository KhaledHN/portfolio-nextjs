import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "../components/NavBar/Navbar";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khaled Hazem | Front-End Developer</title>
        <link rel="icon" href="/assets/tabLogo.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
