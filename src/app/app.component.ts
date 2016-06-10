import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav'
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";

@Component({
  moduleId: module.id,
  selector: 'pwa-app',
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    HeaderComponent,
    MD_LIST_DIRECTIVES
  ],
  styleUrls: [ './app.scss' ],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  { path: '/home', component: HomeComponent, name: 'Home', useAsDefault: true },
  { path: '/about', component: AboutComponent, name: 'About' }
])
export class AppComponent implements OnInit {
  ngOnInit() {
      console.log('App loaded!!');
  }
}
