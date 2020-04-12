import { initialProjectList, Project } from '@workshop/core-data';
import { ProjectActionTypes } from './projects.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// 1º - defnnir el esquema del reducer
// - creamos una Entity para manejar la colecciond de Projects (como si fuera una base de datos)
export interface ProjectState extends EntityState<Project> {
  projectList: Project[];
  projectSelectedId: string | null;
}

// 2º - crear un adaptador para las entidades
// la mutabilidad en el reducer es gestinoada por el adapter
export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

// 3º - definir el estado inicial del reducer
// crear un initiañstate a partir del adapter de la ectity
export const initialState: ProjectState = adapter.getInitialState({
  projectList: initialProjectList,
  projectSelectedId: null
});

// 4º - construir el reducer
export const projectReducer = (state: ProjectState = initialState, action): ProjectState => {
  // PATRON COMANDER: interfaz de comunicacion con el reducer (-> mutar el estado de la aplicacion)
  // lo que se quiere devolver en el reducer es un sestado nuevo para cada AppState
  switch (action.type) {
    // pasos a seguir para sincronizar datos son el reducer: signar un action.type y delear a un metodo standalona ---> PORQUE ES TESTEABLE
    case ProjectActionTypes.SelectProject:
      return Object.assign({}, state, { projectSelectedId: action.payload });
    case ProjectActionTypes.CreateProject:
      return adapter.addOne(action.payload, state);
    case ProjectActionTypes.UpdateProject:
      return adapter.updateOne(action.payload, state);
    case ProjectActionTypes.DeleteProject:
      return adapter.removeOne(action.payload, state);
    default:
      return state;
  }
};
