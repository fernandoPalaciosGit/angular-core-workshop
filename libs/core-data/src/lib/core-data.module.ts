import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects/projects.service';
import { StateModule } from './state/state.module';
import { HttpClientModule } from '@angular/common/http';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  providers: [ProjectsService, DataPersistence],
  imports: [CommonModule, HttpClientModule, StateModule],
})
export class CoreDataModule {
}
