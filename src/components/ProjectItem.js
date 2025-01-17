import React from "react";

function ProjectItem({ name, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      {technologies.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
  );
}
export default ProjectItem;
