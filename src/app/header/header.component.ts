import {Component, ViewEncapsulation} from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar/toolbar";
import {MdIcon} from "@angular2-material/icon/icon";
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";

@Component({
  moduleId: module.id,
  selector: 'pwa-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MdIcon,
  ],
  providers: [MdIconRegistry],
  inputs: ['nav'],
})
export class HeaderComponent {
  nav: any;
}
