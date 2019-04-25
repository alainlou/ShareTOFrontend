import { Injectable } from '@angular/core';
import { Item, SimpleItem } from '../models/item';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemCache: Observable<Item []>;

  constructor(private http: HttpClient) { }

  getItemByTitle(searchString: string) {
    return this.http.get<Item []>('api/items/' + searchString);
  }

  getItems() {
    return this.http.get<Item []>('api/items');
  }

  postItem(simpleItem: SimpleItem) {
    return this.http.post('api/items', simpleItem);
  }
}
