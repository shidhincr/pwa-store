import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
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
    MD_CARD_DIRECTIVES
  ],
  providers: [ItemService]
})
export class HomeComponent implements OnInit {
  items:Array<Item>;

  constructor(private _itemService:ItemService, private _router:Router) {
  }

  ngOnInit() {
    this._itemService.getItems().then((data) => {
      this.items = data;
    });
  }

  navigateTo(id:number) {
    this._router.navigate(['Details',{id}]);
  }
}
