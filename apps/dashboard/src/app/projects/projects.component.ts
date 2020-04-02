import { Component, OnInit } from '@angular/core';
import { getEmptyProject, Project, ProjectsService } from '@workshop/core-data';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  selectedProject: Project;
  projects$: Observable<Project[]>;

  // injection dependency by instance, (private) automatically creates local variable this.projectsService
  constructor(private projectsService: ProjectsService) {
  }

  // lifecycle hook del componente: despues de bindear todos sus eventes: el moment oportuno de hacer llamada asyncrona al servicio que trae su modelo de datos
  ngOnInit(): void {
    this.resetProjects();
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  deleteProject(project: Project) {
    this.projectsService.delete(project)
      .subscribe(() => {
        this.resetProjects();
      });
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

  saveProject(selectedProject: Project) {
    console.log(selectedProject);
  }
}
