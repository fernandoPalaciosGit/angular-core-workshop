import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListComponent } from './projects-list.component';
import { MaterialModule } from '@workshop/material';
import { DebugElement } from '@angular/core';

describe('ProjectsListComponent', () => {
  let fixture: ComponentFixture<ProjectsListComponent>;
  let projectsListComponent: ProjectsListComponent;
  let spyComponent: DebugElement;

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [ProjectsListComponent],
      imports: [MaterialModule]
    }).createComponent(ProjectsListComponent);
    projectsListComponent = fixture.componentInstance;
    spyComponent = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should crate the component', () => {
    expect(projectsListComponent).toBeTruthy();
  });

  it('should have a primary color', () => {
    expect(projectsListComponent.primaryColor).toBe('red');
  });
});
