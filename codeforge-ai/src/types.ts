export interface Project {
  id: string;
  name: string;
  type: 'Backend' | 'Fullstack';
  template: string;
  createdAt: Date;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  type: 'Backend' | 'Fullstack';
}

export interface ProjectGenerationData {
  projectType: 'Backend' | 'Fullstack';
  template: string;
  description: string;
}