import { Component, OnInit } from '@angular/core';
import { CreateProject, DeleteProject, getEmptyProject, Project, ProjectsService, UpdateProject, LoadProjectList, selectAllProjects, ProjectState } from '@workshop/core-data';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;
  projects$: Observable<Project[]>;

  // injection dependency by instance, (private) automatically creates local variable this.projectsService
  constructor(
    private projectsService: ProjectsService,
    private store: Store<ProjectState>
  ) {
    this.projects$ = this.store.pipe(select(selectAllProjects));
    // creamos una lista a traves de una accion del reducer
  }

  // lifecycle hook del componente: despues de bindear todos sus eventes: el moment oportuno de hacer llamada asyncrona al servicio que trae su modelo de datos
  ngOnInit(): void {
    this.resetProjects();
  }

  getProjects() {
    this.store.dispatch(new LoadProjectList());
    // sincronizamos con el store
  }

  deleteProject(project: Project) {
    // this.projectsService.delete(project)
    //   .subscribe(() => this.resetProjects());
    this.store.dispatch(new DeleteProject(project));
  }

  createProject(project: Project) {
    // this.projectsService.create(project)
    //   .subscribe(() => this.resetProjects());
    this.store.dispatch(new CreateProject(project));
  }

  updateProject(project: Project) {
    // this.projectsService.update(project)
    //   .subscribe(() => this.resetProjects());
    this.store.dispatch(new UpdateProject(project));
  }

  getApprovedProjects() {
    this.projectsService.all()
      .pipe(
        filter((project: Project) => project.approved)
      );
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  resetProjects() {
    this.selectProject(getEmptyProject());
    this.getProjects();
  }

  saveProject(project: Project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }
}
