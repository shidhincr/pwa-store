import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav'
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {HeaderComponent} from './header/header.component';

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

export class AppComponent implements OnInit {
  currentUrl : string;
  sub: any;
  constructor(private _router: Router ){}

  ngOnInit() {
    console.log('App loaded!!');
    this.sub = this._router.events.subscribe( data => this.currentUrl = data.url );
  }

  ngOnDestroy(){
    this.sub && this.sub();
  }

  isCurrentRoute(route : string) : boolean {
    return this.currentUrl === route;
  }
}
