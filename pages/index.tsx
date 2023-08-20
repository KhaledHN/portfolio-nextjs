import Head from "next/head";
import { Inter } from "next/font/google";
import About from "components/About";
import Main from "components/Main";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khaled Hazem | Front-End Developer</title>
        <link rel="icon" href="/assets/navLgo.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Contact />
      <Analytics />
    </div>
  );
}
