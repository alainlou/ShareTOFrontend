import { Component, OnInit } from '@angular/core';
import { Item, ITEMS } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hack for HackLassonde';
  items: Item [] = ITEMS;

  ngOnInit() {
    console.log('started');
  }
}
