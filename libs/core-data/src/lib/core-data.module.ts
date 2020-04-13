import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects/projects.service';
import { StateModule } from './state/state.module';
import { HttpClientModule } from '@angular/common/http';
import { DataPersistence } from '@nrwl/angular';
import { ProjectsFacade } from './state/projects/projects.facade';

@NgModule({
  providers: [ProjectsService, DataPersistence, ProjectsFacade],
  imports: [CommonModule, HttpClientModule, StateModule],
})
export class CoreDataModule {
}
