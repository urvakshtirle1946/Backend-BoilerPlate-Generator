import React from 'react';
import { Template } from '../types';

interface TemplateSelectorProps {
  templates: Template[];
  selectedProjectType: 'Backend' | 'Fullstack' | null;
  selectedTemplate: Template | null;
  onProjectTypeSelect: (type: 'Backend' | 'Fullstack') => void;
  onTemplateSelect: (template: Template) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedProjectType,
  selectedTemplate,
  onProjectTypeSelect,
  onTemplateSelect,
}) => {
  const backendTemplates = templates.filter(t => t.type === 'Backend');
  const fullstackTemplates = templates.filter(t => t.type === 'Fullstack');

  return (
    <div className="space-y-8">
      {/* Project Type Selection */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => onProjectTypeSelect('Backend')}
          className={`flex-1 p-6 rounded-xl border-2 transition-all duration-200 ${
            selectedProjectType === 'Backend'
              ? 'border-blue-500 bg-blue-50 shadow-md'
              : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Backend Boilerplate</h3>
            <p className="text-gray-600 text-sm">
              APIs, servers, and backend services
            </p>
          </div>
        </button>

        <button
          onClick={() => onProjectTypeSelect('Fullstack')}
          className={`flex-1 p-6 rounded-xl border-2 transition-all duration-200 ${
            selectedProjectType === 'Fullstack'
              ? 'border-purple-500 bg-purple-50 shadow-md'
              : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-sm'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fullstack App</h3>
            <p className="text-gray-600 text-sm">
              Complete applications with frontend and backend
            </p>
          </div>
        </button>
      </div>

      {/* Template Selection */}
      {selectedProjectType && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Choose a {selectedProjectType} Template:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(selectedProjectType === 'Backend' ? backendTemplates : fullstackTemplates).map((template) => (
              <button
                key={template.id}
                onClick={() => onTemplateSelect(template)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  selectedTemplate?.id === template.id
                    ? selectedProjectType === 'Backend'
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-purple-500 bg-purple-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <h4 className="font-semibold text-gray-800 mb-2">{template.name}</h4>
                <p className="text-sm text-gray-600">{template.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Template Summary */}
      {selectedTemplate && (
        <div className={`p-4 rounded-lg border-2 ${
          selectedProjectType === 'Backend'
            ? 'border-blue-500 bg-blue-50'
            : 'border-purple-500 bg-purple-50'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">Selected Template:</h4>
              <p className="text-gray-600">{selectedTemplate.name}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              selectedProjectType === 'Backend'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-purple-100 text-purple-800'
            }`}>
              {selectedProjectType}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;