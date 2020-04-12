import { Injectable } from '@angular/core';
import { CreateProject, LoadProjectList, Project, ProjectsService, ProjectState } from '@workshop/core-data';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { ProjectActionTypes, ProjectCreated, ProjectListLoaded } from './projects.actions';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class ProjectsEffects {
  @Effect() loadProjects$: Observable<Action> = this.dataPersistence.fetch(ProjectActionTypes.LoadProjectList, {
    run: (action: LoadProjectList, state: ProjectState) => {
      return this.projectsService.all().pipe(
        map((response: Project[]) => new ProjectListLoaded(response))
      );
    },
    onError: (action: LoadProjectList, error) => {
      console.log(action, error);
    }
  });

  // ejemplo sin la abstraccion de dataPersisance
  /*@Effect() loadProjectsWithoutPersistance: Observable<Action> = this.actions$.pipe(
    mergeMap((action: Action) => {
      return this.projectsService.all();
    })
  );*/

  // pessimistic: la respuesta del servidor y la accion (donde se suscribe el efecto) del reducer son bloqueantes
  @Effect() addProjects$: Observable<Action> = this.dataPersistence.pessimisticUpdate(ProjectActionTypes.CreateProject, {
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
