import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@workshop/material';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@workshop/ui-login';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // (loading on demand) as we are using lazy loading to the modules routing, we are no longer to load as eagle mode
    // HomeModule,
    // ProjectsModule,
    // CustomersModule,
    UiLoginModule, // for example purpose, we are loading Login Module after onLoad window
    AppRoutingModule // at the BOTTOM to let lazy load previous Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
