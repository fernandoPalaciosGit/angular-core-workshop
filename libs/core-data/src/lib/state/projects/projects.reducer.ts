import { initialProjectList, Project } from '@workshop/core-data';

// todos devuelven una copia del del proyecto -> evitamos mutabilidad por referencia a otras partes de la aplicacion que usen projects
const createProject = (projects, project) => [...projects, project];
const updateProject = (projects, project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects, project) => projects.filter(p => project.id !== p.id);

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
  // PATRON COMANDER: interfaz de comunicacion con el reducer (-> mutar el estado de la aplicacion)
  // lo que se quiere devolver en el reducer es un sestado nuevo para cada AppState
  switch (action.type) {
    // pasos a seguir para sincronizar datos son el reducer: signar un action.type y delear a un metodo standalona ---> PORQUE ES TESTEABLE
    case 'select':
      return {
        // payload: projecto que enviamos por la interfac a crear
        projectList: state.projectList,
        projectSelectedId: action.payload
      };
    case 'create':
      return {
        // payload: projecto que enviamos por la interfac a crear
        projectList: createProject(state.projectList, action.payload),
        projectSelectedId: state.projectSelectedId
      };
    case 'update':
      return {
        // payload: projecto que enviamos por la interfac a crear
        projectList: updateProject(state.projectList, action.payload),
        projectSelectedId: state.projectSelectedId
      };
    case 'delete':
      return {
        // payload: projecto que enviamos por la interfac a crear
        projectList: deleteProject(state.projectList, action.payload),
        projectSelectedId: state.projectSelectedId
      };
    default:
      return state;
  }
};
