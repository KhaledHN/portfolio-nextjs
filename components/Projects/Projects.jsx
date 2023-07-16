/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto p-4 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Travelious"
            backgroundImg="/projectsAssets/Travelious.jpeg"
            projectUrl="/Travel"
          />

          <ProjectItem
            title="ColorLib"
            backgroundImg="/projectsAssets/Colorlibs.jpeg"
            projectUrl="Colorlib"
          />

          <ProjectItem
            title="white3"
            backgroundImg="/projectsAssets/white23.png"
            projectUrl="White3"
          />

          <ProjectItem
            title="white4"
            backgroundImg="/projectsAssets/white4.png"
            projectUrl="White4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
