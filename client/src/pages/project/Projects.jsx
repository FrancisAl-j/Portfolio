import React, { useState } from "react";
import "./project.css";
import { projects } from "../../Data_Project";
import ProjectSlide from "./slide/ProjectSlide";

const Projects = () => {
  const [slides] = useState(projects);
  return (
    <div className="project">
      <div className="project-content">
        <ProjectSlide slides={slides} />
      </div>
    </div>
  );
};

export default Projects;
