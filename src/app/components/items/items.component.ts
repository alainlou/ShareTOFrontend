import { Component, OnInit } from '@angular/core';
import { ITEMS, Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item [] = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
