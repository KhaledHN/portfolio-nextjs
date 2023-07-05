/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import whiteImg from "../assets/white.png";
import whiteImg2 from "../assets/white2.png";
import whiteImg3 from "../assets/white23.png";
import whiteImg4 from "../assets/white4.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="white"
            backgroundImg={whiteImg}
            projectUrl="/assets/white.png"
          />

          <ProjectItem
            title="white2"
            backgroundImg={whiteImg2}
            projectUrl="/assets/white2.png"
          />

          <ProjectItem
            title="white3"
            backgroundImg={whiteImg3}
            projectUrl="/assets/white23.png"
          />

          <ProjectItem
            title="white4"
            backgroundImg={whiteImg4}
            projectUrl="/assets/white4.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
