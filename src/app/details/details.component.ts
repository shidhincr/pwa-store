'use strict';
import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {ItemService} from "../items/item.service";

@Component({
  selector: 'pwa-details',
  styles: [`
    .details {
      opacity: 1;
      margin-top: 0;
      animation: up 500ms;
    }
    @keyframes up {
      from {
        opacity: 0;
        margin-top: 50px;
      }
      to {
        opacity: 1;
        margin-top: 0;
      }
    }
  `],
  template: ` 
    <div class="details">
      <md-card>
        <md-card-content>
          <h1>{{ itemData.name }}</h1>
        </md-card-content>
        <md-card-content>
          <section>
            {{ itemData.description }}
          </section>
        </md-card-content>
      </md-card>
    </div>
  `,
  directives: [MD_CARD_DIRECTIVES],
  providers: [ItemService]
})
export class DetailsComponent implements OnInit {
  itemData:any = {};

  constructor(private _routeParams:RouteParams,
              private _itemService:ItemService) {
  }

  ngOnInit():any {
    let id = Number(this._routeParams.get('id'));
    this._itemService.getItems().then((data)=> {
      this.itemData = data.filter((item)=>item.id === id)[0];
    });
  }
}


