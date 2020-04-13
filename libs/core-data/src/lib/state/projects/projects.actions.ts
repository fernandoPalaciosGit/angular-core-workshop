import { Action } from '@ngrx/store';
import { Project } from '@workshop/core-data';

export enum ProjectActionTypes {
  //  estas acciones son las que usaran como hook los reducers y se loguearan en consola (lo mas declarativa que querramos)
  SelectProject = '[Projects] select project',
  LoadProjectList = '[Projects] render all store projects', // <--- trigger the @Effect
  ProjectListLoaded = '[Projects] projects loaded by server', // <--- the @Effect will dispatch from here
  UpdateProject = '[Projects] update same project',
  ProjectUpdated = '[Projects] project updated by server',
  DeleteProject = '[Projects] delete project',
  ProjectDeleted = '[Projects] project deleted by server',
  CreateProject = '[Projects] create project',
  ProjectCreated = '[Projects] project created by server',
}

export class SelectProject implements Action {
  readonly type: string = ProjectActionTypes.SelectProject;

  constructor(public payload: string) {
  }
}

export class UpdateProject implements Action {
  readonly type: string = ProjectActionTypes.UpdateProject;

  constructor(public payload: Project) {
  }
}

export class DeleteProject implements Action {
  readonly type: string = ProjectActionTypes.DeleteProject;

  constructor(public payload: Project) {
  }
}

export class CreateProject implements Action {
  readonly type: string = ProjectActionTypes.CreateProject;

  constructor(public payload: Project) {
  }
}

export class LoadProjectList implements Action {
  readonly type: string = ProjectActionTypes.LoadProjectList;
}

export class ProjectListLoaded implements Action {
  readonly type: ProjectActionTypes.ProjectListLoaded;

  constructor(public payload: Project[]) {
  }
}

export class ProjectUpdated implements Action {
  readonly type: ProjectActionTypes.ProjectUpdated;

  constructor(public payload: Project) {
  }
}

export class ProjectDeleted implements Action {
  readonly type: ProjectActionTypes.ProjectDeleted;

  constructor(public payload: Project) {
  }
}

export class ProjectCreated implements Action {
  readonly type: ProjectActionTypes.ProjectCreated;

  constructor(public payload: Project) {
  }
}

export type ProjectsActions = SelectProject | CreateProject | UpdateProject | DeleteProject | LoadProjectList | ProjectUpdated | ProjectDeleted | ProjectCreated;
