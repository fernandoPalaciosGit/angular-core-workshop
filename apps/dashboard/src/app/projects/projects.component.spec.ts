import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { DebugElement } from '@angular/core';
import { getEmptyProject, Project, ProjectsService } from '@workshop/core-data';

describe('Test Projects Dashboards', () => {
  let project: Project;
  let projectDebug: DebugElement;
  let projectsComponent: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectService: ProjectsService;
  const ProjectsServiceMock = {};

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectFormComponent,
        ProjectsListComponent
      ],
      providers: [
        // inject the project service, but override the methods (for stub results in the projects request)
        { provide: ProjectsService, useValue: ProjectsServiceMock }
      ],
      imports: [
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule
      ]
    }).createComponent(ProjectsComponent);
    projectsComponent = fixture.componentInstance;
    projectDebug = fixture.debugElement;
    // this allow to spy the service that would be injected in the Projects component (by the debug)
    projectService = projectDebug.injector.get(ProjectsService);
  });

  it('should update selected product', () => {
    project = getEmptyProject();
    fixture.detectChanges();
    projectsComponent.selectProject(project);
    expect(projectsComponent.selectedProject).toBe(project);
  });
});
