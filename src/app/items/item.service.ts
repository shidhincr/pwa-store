import {Injectable} from "@angular/core";
import {Item} from './item.model';

@Injectable()
export class ItemService {
  getItems():Promise<Item[]> {
    return fetch('./data.json').then(res => res.json());
  }
}
