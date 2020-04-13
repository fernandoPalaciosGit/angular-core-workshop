import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromCustomers from './customers/customers.reducer';
import * as fromProjects from './projects/projects.reducer';
import { isDevMode } from '@angular/core';
import { storeFreeze } from 'ngrx-store-freeze';

// import the type of reducers
export interface AppState {
  projects: fromProjects.ProjectState;
  customers: fromCustomers.CustomersState;
}

// Add the reducers to the App state
export const reducers: ActionReducerMap<AppState> = {
  customers: fromCustomers.customersReducer,
  projects: fromProjects.projectReducer
};

// second reducer: kind type of reducer thar avoid state mutation --> only development
export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [storeFreeze] : [];

// -------------------------------------------------------------------
// CUSTOMERS SELECTORS
// -------------------------------------------------------------------
export const selectCustomersState = createFeatureSelector<fromCustomers.CustomersState>('customers');

export const selectAllCustomers = createSelector(
  selectCustomersState,
  fromCustomers.selectAllCustomers
);

// -------------------------------------------------------------------
// PROJECT SELECTORS, SELECTORES DE ALTO NIVEL (con estos interacciona la aplicacion)
// -------------------------------------------------------------------
export const selectProjectState = createFeatureSelector<fromProjects.ProjectState>('projects');

export const selectProjectEntities = createSelector(
  selectProjectState, fromProjects.selectProjectEntities
);

export const selectCurrentProjectId = createSelector(
  selectProjectState, fromProjects.getSelectedProjectId
);

export const selectAllProjects = createSelector(
  selectProjectState, fromProjects.selectAllProjects
);

export const selectCurrentProject = createSelector(
  selectProjectEntities, selectCurrentProjectId,
  fromProjects.getSelectedProjectEntity
);
