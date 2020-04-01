import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects$: Observable<Project[]>;
  selectedProject: Project;

  // injection dependency by instance, (private) automatically creates local variable this.projectsService
  constructor(private projectsService: ProjectsService) {
  }

  // lifecycle hook del componente: despues de bindear todos sus eventes: el moment oportuno de hacer llamada asyncrona al servicio que trae su modelo de datos
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  deleteProject(project) {
    this.projectsService.delete(project)
      .subscribe(() => this.getProjects());
  }

  getApprovedProjects() {
    this.projectsService.all()
      .pipe(
        filter((project: Project) => project.approved)
      );
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  cancel() {
    this.selectProject(null);
  }
}
