import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@workshop/material';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@workshop/ui-login';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    UiLoginModule, // for example purpose, we are loading Login Module after onLoad window
    AppRoutingModule // at the BOTTOM to let lazy load previous Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
