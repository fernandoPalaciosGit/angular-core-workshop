export { Project, getEmptyProject } from './lib/projects/project';
export { ProjectsService } from './lib/projects/projects.service';
export { CoreDataModule } from './lib/core-data.module';
export { ProjectState } from './lib/state/projects/projects.reducer';
export { SelectProject, CreateProject, UpdateProject, DeleteProject, LoadProjectList } from './lib/state/projects/projects.actions';
export { selectAllProjects, selectCurrentProject } from './lib/state';
export { ProjectsFacade } from './lib/state/projects/projects.facade';
