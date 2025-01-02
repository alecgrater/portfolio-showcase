import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

const ProjectsTab: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
          Projects
        </h2>
        <div className="flex items-center justify-center overflow-x-auto py-8 px-4 -mx-4">
          <div className="flex space-x-8">
            {projectsData.projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                isFocused={index === focusedIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;