import React from 'react';
import { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getTypeColor = (type: 'Backend' | 'Fullstack') => {
    return type === 'Backend' 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-purple-100 text-purple-800';
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📁</div>
        <p className="text-gray-500 text-lg">No projects yet. Create your first one below!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 border border-gray-100"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {project.name}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}
            >
              {project.type}
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Template:</span>
              <span>{project.template}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium mr-2">Created:</span>
              <span>{formatDate(project.createdAt)}</span>
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium text-sm">
            📥 Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;