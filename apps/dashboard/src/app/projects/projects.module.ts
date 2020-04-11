import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { CoreDataModule } from '@workshop/core-data';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    FormsModule,
    CoreDataModule,
  ],
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectFormComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
