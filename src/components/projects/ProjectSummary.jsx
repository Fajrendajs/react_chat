import React from 'react';

export const ProjectSummary = ({ project }) => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted By</p>
          <p className="grex-text">Date</p>
        </div>
      </div>
    </div>
  );
};
