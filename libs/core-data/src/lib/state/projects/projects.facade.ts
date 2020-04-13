import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CreateProject, DeleteProject, LoadProjectList, Project, ProjectState, selectAllProjects, selectCurrentProject, SelectProject, UpdateProject } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectsFacade {
  projects$: Observable<Project[]>;
  selectedProject$: Observable<Project>;

  constructor(
    private store: Store<ProjectState>
  ) {
    // sincronizamos con el store tanto la entidad de projectos como el selector actual
    this.projects$ = this.store.pipe(select(selectAllProjects));
    this.selectedProject$ = this.store.pipe(select(selectCurrentProject));
  }

  /**
   * Manejamos las acciones al reducer
   * */
  resetProjects() {
    this.store.dispatch(new LoadProjectList());
  }

  resetSelectProject(project: Project) {
    this.store.dispatch(new SelectProject(project.id));
  }

  deleteProject(project: Project) {
    this.store.dispatch(new DeleteProject(project));
  }

  createProject(project: Project) {
    this.store.dispatch(new CreateProject(project));
  }

  updateProject(project: Project) {
    this.store.dispatch(new UpdateProject(project));
  }
}
