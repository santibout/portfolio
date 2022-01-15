import React, { useState } from "react";
import "../css/projects.css";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projects";

const Projects = () => {
  let projectCards = projectData.map((project) => {
    return (
      <ProjectCard
        key={project.title}
        title={project.title}
        link={project.link}
        image={project.image}
        alt={project.alt}
        description={project.description}
        disclaimer={project.disclaimer}
      />
    );
  });
  const [projectList, setProjectList] = useState(projectCards);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    setProjectList(
      projectCards.filter((project) => {
        return project.key.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <section id="projects">
      <div className="projects">
        <div className="project-header">
          <h1>Here are some of my projects</h1>
          <div className="form-group">
            {/* <label htmlFor="Search">Search Projects</label> */}
            <input
              id="projectSearch"
              type="text"
              placeholder="search projects"
              value={search}
              onChange={handleChange}
              name="search"
            />
          </div>
        </div>
        <div className="projects-list">{projectList}</div>
      </div>
    </section>
  );
};

export default Projects;
