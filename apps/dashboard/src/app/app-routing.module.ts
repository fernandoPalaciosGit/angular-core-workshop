import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // backface unmapped route that redirect to our home // should be the last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
