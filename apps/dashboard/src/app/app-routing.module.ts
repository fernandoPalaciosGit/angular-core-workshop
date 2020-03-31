import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }, // lazy loading module
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule) }, // lazy loading module
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule) }, // lazy loading module
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // backface unmapped route that redirect to our home // should be the last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
