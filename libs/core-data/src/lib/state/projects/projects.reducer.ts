import { getEmptyProject, Project } from '@workshop/core-data';

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];

const createProject = (projects, project) => [...projects, project];
const updateProject = (projects, project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects, project) => projects.filter(w => project.id !== w.id);

// 1º - defnnir el esquema del reducer
export interface ProjectState {
  projectList: Project[],
  projectSelectedId: string | null,
}

// 2º - definir el estado inicial del reducer
export const initialState: ProjectState = {
  projectList: [getEmptyProject()],
  projectSelectedId: null
};

// 3º - construir el reducer
export const projectReducer = (state = initialState, action): ProjectState => {
  switch (action.type) {
    default:
      return state;
  }
};
