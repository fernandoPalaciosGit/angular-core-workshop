import { initialProjectList, Project } from '@workshop/core-data';

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
  projectList: initialProjectList,
  projectSelectedId: null
};

// 3º - construir el reducer
export const projectReducer = (state: ProjectState = initialState, action): ProjectState => {
  switch (action.type) {
    // pasos a seguir para sincronizar datos son el reducer: signar un action.type y delear a un metodo standalona ---> PORQUE ES TESTEABLE
    default:
      return state;
  }
};
