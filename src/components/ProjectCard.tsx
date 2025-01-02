import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  url: string;
  logo: string;
  summary: string;
  isFocused: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url, logo, summary, isFocused }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        transform transition-all duration-500 ease-in-out
        ${isFocused ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-70 hover:opacity-90'}
        bg-white rounded-xl shadow-lg overflow-hidden
        aspect-[3/4] w-72 mx-4 cursor-pointer
        hover:shadow-xl
      `}
    >
      <div className="h-full flex flex-col">
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src={logo}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-[#2C3E50]">{title}</h3>
            <ExternalLink className="w-5 h-5 text-[#BDC3C7]" />
          </div>
          <p className="text-[#7F8C8D] flex-grow">{summary}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;