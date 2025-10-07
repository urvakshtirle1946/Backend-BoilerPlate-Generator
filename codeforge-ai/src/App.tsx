import React, { useState } from 'react';
import { Project, Template, ProjectGenerationData } from './types';
import ProjectList from './components/ProjectList';
import TemplateSelector from './components/TemplateSelector';
import ChatInput from './components/ChatInput';

// Sample data
const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce API',
    type: 'Backend',
    template: 'Express Auth',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Task Manager App',
    type: 'Fullstack',
    template: 'MERN E-Commerce',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '3',
    name: 'Blog Platform',
    type: 'Backend',
    template: 'Express Basic',
    createdAt: new Date('2024-01-05'),
  },
];

const templates: Template[] = [
  // Backend templates
  {
    id: 'backend-1',
    name: 'Express Basic',
    description: 'Simple Express.js server with basic routing',
    type: 'Backend',
  },
  {
    id: 'backend-2',
    name: 'Express Auth',
    description: 'Express.js with JWT authentication and user management',
    type: 'Backend',
  },
  {
    id: 'backend-3',
    name: 'FastAPI Basic',
    description: 'Python FastAPI server with automatic documentation',
    type: 'Backend',
  },
  // Fullstack templates
  {
    id: 'fullstack-1',
    name: 'MERN E-Commerce',
    description: 'Complete e-commerce app with React, Node.js, and MongoDB',
    type: 'Fullstack',
  },
  {
    id: 'fullstack-2',
    name: 'Food Delivery App',
    description: 'Food delivery platform with real-time ordering',
    type: 'Fullstack',
  },
  {
    id: 'fullstack-3',
    name: 'Social Media Dashboard',
    description: 'Social media management dashboard with analytics',
    type: 'Fullstack',
  },
];

function App() {
  const [projects] = useState<Project[]>(sampleProjects);
  const [selectedProjectType, setSelectedProjectType] = useState<'Backend' | 'Fullstack' | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [projectDescription, setProjectDescription] = useState('');

  const handleProjectTypeSelect = (type: 'Backend' | 'Fullstack') => {
    setSelectedProjectType(type);
    setSelectedTemplate(null); // Reset template selection when changing type
  };

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleGenerateProject = () => {
    if (!selectedProjectType || !selectedTemplate || !projectDescription.trim()) {
      alert('Please select a project type, template, and provide a description.');
      return;
    }

    const generationData: ProjectGenerationData = {
      projectType: selectedProjectType,
      template: selectedTemplate.name,
      description: projectDescription,
    };

    console.log('Project Generation Data:', JSON.stringify(generationData, null, 2));
    
    // Reset form
    setProjectDescription('');
    setSelectedTemplate(null);
    setSelectedProjectType(null);
    
    alert('Project generated! Check the console for details.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🚀 CodeForge AI
          </h1>
          <p className="text-lg text-gray-600">
            Generate ready-to-use backend and fullstack projects instantly
          </p>
        </div>

        {/* Previous Projects Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Your Previous Projects
          </h2>
          <ProjectList projects={projects} />
        </div>

        {/* Template Selection Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Choose Your Template
          </h2>
          <TemplateSelector
            templates={templates}
            selectedProjectType={selectedProjectType}
            selectedTemplate={selectedTemplate}
            onProjectTypeSelect={handleProjectTypeSelect}
            onTemplateSelect={handleTemplateSelect}
          />
        </div>

        {/* Chat Input Section */}
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 p-6 rounded-t-2xl shadow-lg">
          <ChatInput
            projectDescription={projectDescription}
            onDescriptionChange={setProjectDescription}
            onGenerate={handleGenerateProject}
            isDisabled={!selectedProjectType || !selectedTemplate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
