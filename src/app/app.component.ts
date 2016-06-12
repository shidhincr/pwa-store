import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

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
    MD_LIST_DIRECTIVES,
    HeaderComponent
  ],
  styleUrls: [ './app.scss' ],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  { path: '/', component: HomeComponent, name: 'Home', useAsDefault: true },
  { path: '/about', component: AboutComponent, name: 'About' }
])
export class AppComponent implements OnInit {
  currentUrl : string;
  constructor(private _router: Router ){}

  ngOnInit() {
    console.log('App loaded!!');
    this._router.subscribe(
      currentUrl => this.currentUrl = currentUrl,
      error => console.log(error)
    );
  }

  isCurrentRoute(route : string) : boolean {
    return this.currentUrl === route;
  }
}
