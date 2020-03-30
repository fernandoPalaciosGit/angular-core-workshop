import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('materialSidenav') materialSidenav : MatSidenav;
  title = 'Angular Core WorkShop';

  toggleSideNav() {
    this.materialSidenav.toggle();
  }
}
