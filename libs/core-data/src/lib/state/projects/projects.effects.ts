import { Injectable } from '@angular/core';
import { CreateProject, LoadProjectList, Project, ProjectsService, ProjectState } from '@workshop/core-data';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { ProjectActionTypes, ProjectCreated, ProjectListLoaded } from './projects.actions';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProjectsEffects {
  @Effect() loadProjects$ = this.dataPersistence.fetch(ProjectActionTypes.LoadProjectList, {
    run: (action: LoadProjectList, state: ProjectState) => {
      return this.projectsService.all().pipe(
        map((response: Project[]) => new ProjectListLoaded(response))
      );
    },
    onError: (action: LoadProjectList, error) => {
      console.log(action, error);
    }
  });

  @Effect() addProjects$ = this.dataPersistence.pessimisticUpdate(ProjectActionTypes.CreateProject, {
    run: (action: CreateProject, state: ProjectState) => {
      return this.projectsService.create(action.payload).pipe(
        map((project: Project) => new ProjectCreated(project))
      );
    },
    onError: (action: CreateProject, error) => {
      console.log(action, error);
    }
  });

  constructor(
    private actions$: Actions, // manejamos el binding de eventos desde la applicacion hacia el reduecr
    private projectsService: ProjectsService, // request server
    private dataPersistence: DataPersistence<ProjectState>
  ) {
  }
}
