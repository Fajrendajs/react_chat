import React from "react";
import { ProjectSummary } from "./ProjectSummary";
import { Link } from "react-router-dom";

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link key={project.id} to={"/project/" + project.id}>
              <ProjectSummary project={project} />;
            </Link>
          );
        })}
    </div>
  );
};
