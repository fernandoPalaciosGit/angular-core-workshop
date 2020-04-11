import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

import { metaReducers, reducers } from '.';
import { CustomersEffects } from './customers/customers.effects';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}), // disponibilidad de reducers
    StoreDevtoolsModule.instrument({ maxAge: 10 }), // activar herramientas redux
    EffectsModule.forRoot([ // añadir la lista de EFFECTS (side effects)
      CustomersEffects
    ])
  ],
  declarations: []
})
export class StateModule {
}
