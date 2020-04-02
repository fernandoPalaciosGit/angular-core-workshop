import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { DebugElement } from '@angular/core';
import { getEmptyProject, Project } from '@workshop/core-data';

describe('Test Projects Dashboards', () => {
  let project: Project;
  let spyComponent: DebugElement;
  let projectsComponent: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectFormComponent,
        ProjectsListComponent
      ],
      imports: [
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule
      ]
    }).createComponent(ProjectsComponent);
    spyComponent = fixture.debugElement;
    projectsComponent = fixture.componentInstance;
  });

  it('should update selected product', () => {
    project = getEmptyProject();
    fixture.detectChanges();
    projectsComponent.selectProject(project);
    expect(projectsComponent.selectedProject).toBe(project);
  });
});
