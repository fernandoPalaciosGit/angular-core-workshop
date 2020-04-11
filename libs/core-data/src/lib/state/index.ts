import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromCustomers from './customers/customers.reducer';
import * as fromProjects from './projects/projects.reducer';
import { isDevMode } from '@angular/core';
import { storeFreeze } from 'ngrx-store-freeze';

// import the type of reducers
export interface AppState {
  customers: fromCustomers.CustomersState,
  projects: fromProjects.ProjectState,
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


