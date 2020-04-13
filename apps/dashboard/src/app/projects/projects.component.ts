import { Component, OnInit } from '@angular/core';
import {
  getEmptyProject,
  Project, ProjectsFacade,
  ProjectsService
} from '@workshop/core-data';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    private facade: ProjectsFacade
  ) {
    this.projects$ = facade.projects$;
    this.selectedProject$ = facade.selectedProject$;
  }

  // lifecycle hook del componente: despues de bindear todos sus eventes: el moment oportuno de hacer llamada asyncrona al servicio que trae su modelo de datos
  ngOnInit(): void {
    this.facade.resetProjects();
    this.resetSelectProjectEmpty();
  }

  selectProject(project: Project) {
    this.facade.resetSelectProject(project);
  }

  deleteProject(project: Project) {
    this.facade.deleteProject(project);
    this.resetSelectProjectEmpty();
  }

  createProject(project: Project) {
    this.facade.createProject(project);
    this.resetSelectProjectEmpty();
  }

  updateProject(project: Project) {
    this.facade.updateProject(project);
    this.resetSelectProjectEmpty();
  }

  resetSelectProjectEmpty() {
    this.facade.resetSelectProject(getEmptyProject());
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
