import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsListComponent } from './projects-list.component';
import { MaterialModule } from '@workshop/material';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProjectsListComponent', () => {
  let fixture: ComponentFixture<ProjectsListComponent>;
  let projectsListComponent: ProjectsListComponent;
  let projectListDebug: DebugElement;

  beforeEach(async () => {
    // instantiate the fixture
    fixture = TestBed.configureTestingModule({
      declarations: [ProjectsListComponent],
      imports: [MaterialModule]
    }).createComponent(ProjectsListComponent);
    // get the component instance
    projectsListComponent = fixture.componentInstance;
    // get the debug element aka the component lives on
    projectListDebug = fixture.debugElement;
    // manually force change detection (execute ngOnInit())
    fixture.detectChanges();
  });

  it('should crate the component', () => {
    expect(projectsListComponent).toBeTruthy();
  });

  it('should have a primary color', () => {
    expect(projectsListComponent.primaryColor).toBe('red');
  });

  it('should update the primary color in the component', () => {
    const projectTitle = projectListDebug.query(By.css('h1'));
    const newTitle = 'new Title';

    projectsListComponent.title = newTitle;
    fixture.detectChanges();
    expect(projectTitle.nativeElement.innerHtml).toBe(newTitle);
  });
});
