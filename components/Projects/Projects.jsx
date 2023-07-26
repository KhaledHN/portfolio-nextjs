import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch project data");
        }
        return res.json();
      })
      .then((data) => {
        setProjectsData(data.projects);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if fetch fails
  }

  const projectsList = projectsData.map((project) => (
    <ProjectItem
      title={project.title}
      backgroundImg={project.image}
      slug={project.slug}
      key={project.slug} // Use a unique identifier as the key
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
