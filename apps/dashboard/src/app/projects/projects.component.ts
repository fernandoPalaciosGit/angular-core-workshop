import { Component, OnInit } from '@angular/core';
import {
  CreateProject,
  DeleteProject,
  getEmptyProject,
  Project,
  ProjectsService,
  UpdateProject,
  LoadProjectList,
  selectAllProjects,
  ProjectState,
  selectCurrentProject,
  SelectProject
} from '@workshop/core-data';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedProject$: Observable<Project>;

  // injection dependency by instance, (private) automatically creates local variable this.projectsService
  constructor(
    private projectsService: ProjectsService,
    private store: Store<ProjectState>
  ) {
    // sincronizamos con el store tanto la entidad de projectos como el selector actual
    this.projects$ = this.store.pipe(select(selectAllProjects));
    this.selectedProject$ = this.store.pipe(select(selectCurrentProject));
  }

  // lifecycle hook del componente: despues de bindear todos sus eventes: el moment oportuno de hacer llamada asyncrona al servicio que trae su modelo de datos
  ngOnInit(): void {
    this.resetProjects();
    this.resetSelectProject(null);
  }

  resetSelectProject(project: Project) {
    this.store.dispatch(new SelectProject(project));
  }

  resetProjects() {
    // creamos una lista a traves de una accion del reducer
    this.store.dispatch(new LoadProjectList());
  }

  selectProject(project: Project) {
    this.resetSelectProject(project);
  }

  deleteProject(project: Project) {
    this.store.dispatch(new DeleteProject(project));
    this.resetSelectProject(null);
  }

  createProject(project: Project) {
    this.store.dispatch(new CreateProject(project));
    this.resetSelectProject(null);
  }

  updateProject(project: Project) {
    this.store.dispatch(new UpdateProject(project));
    this.resetSelectProject(null);
  }

  getApprovedProjects() {
    this.projectsService.all()
      .pipe(
        filter((project: Project) => project.approved)
      );
  }

  saveProject(project: Project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }
}
