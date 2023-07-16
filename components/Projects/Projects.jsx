import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projectsData, setprojectsData] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((response) => setprojectsData(response.projects));
  }, []);

  const projectsList = projectsData.map((project, key) => (
    <ProjectItem
      title={project.title}
      backgroundImg={project.image}
      slug={project.slug}
      key={key}
    />
  ));

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto p-4 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">What I`ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">{projectsList}</div>
      </div>
    </div>
  );
};

export default Projects;
