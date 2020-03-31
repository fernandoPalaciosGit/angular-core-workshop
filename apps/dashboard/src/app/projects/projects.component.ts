import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects: Project[];
  selectedProject: Project;

  // injection dependency by instance, (private) automatically creates local variable this.projectsService
  constructor(private projectsService: ProjectsService) {
  }

  // lifecycle del componente: despues de bindear todos sus eventes: el moment oportuno de hacer llamada asyncrona al servicio que trae su modelo de datos
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.projectsService.all();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  cancel() {
    this.selectProject(null);
  }
}
