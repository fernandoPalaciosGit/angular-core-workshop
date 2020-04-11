import { Action } from '@ngrx/store';
import { Project } from '@workshop/core-data';

export enum ProjectActionTypes {
  //  estas acciones son las que usaran como hook los reducers y se loguearan en consola (lo mas declarativa que querramos)
  SelectProject = '[Projects] select project',
  UpdateProject = '[Projects] update same project',
  DeleteProject = '[Projects] delete project',
  CreateProject = '[Projects] create project',
}

export class SelectProject implements Action {
  readonly type: string = ProjectActionTypes.SelectProject;

  constructor(private payload: Project) {
  }
}

export class UpdateProject implements Action {
  readonly type: string = ProjectActionTypes.UpdateProject;

  constructor(private payload: Project) {
  }
}

export class DeleteProject implements Action {
  readonly type: string = ProjectActionTypes.DeleteProject;

  constructor(private payload: Project) {
  }
}

export class CreateProject implements Action {
  readonly type: string = ProjectActionTypes.CreateProject;

  constructor(private payload: Project) {
  }
}

export type ProjectsActions = SelectProject | CreateProject | UpdateProject | DeleteProject
