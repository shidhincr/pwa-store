import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/index';

import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav'

@Component({
  moduleId: module.id,
  selector: 'app',
  directives: [
    ROUTER_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MdIcon,
    HeaderComponent
  ],
  styleUrls: [ './app.less' ],
  templateUrl: './app.html',
  providers: [MdIconRegistry
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
