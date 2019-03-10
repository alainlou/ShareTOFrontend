import { Injectable } from '@angular/core';
import { Item, SimpleItem } from '../models/item';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemCache: Observable<Item []>;

  constructor(private http: HttpClient) { }

  getItemByTitle(searchString: string) {
    const BASE_URL: string = environment.apiUrl;
    this.itemCache = this.http.get<Item []>(BASE_URL + '/item' + '/' + searchString);
  }

  getItems() {
    const BASE_URL: string = environment.apiUrl;
    this.itemCache = this.http.get<Item []>(BASE_URL + '/items');
  }

  postItem(simpleItem: SimpleItem) {
    const BASE_URL: string = environment.apiUrl;
    this.http.post(BASE_URL + '/post-item', simpleItem).subscribe((resp) => {
      console.log(resp);
    });
  }
}
