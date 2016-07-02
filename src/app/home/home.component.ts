import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list/grid-list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {Item} from '../items/item.model';
import {ItemService} from '../items/item.service';


@Component({
  moduleId: module.id,
  selector: 'pwa-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
  directives: [
    MD_GRID_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    ROUTER_DIRECTIVES
  ],
  providers: [ItemService]
})
export class HomeComponent implements OnInit {
  items:Array<Item>;

  constructor(private _itemService:ItemService) {
  }

  ngOnInit() {
    this._itemService.getItems().then((data) => {
      this.items = data;
    });
  }
}
