import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects/projects.service';
import { StateModule } from './state/state.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [ProjectsService],
  imports: [CommonModule, HttpClientModule, StateModule],
})
export class CoreDataModule {
}
