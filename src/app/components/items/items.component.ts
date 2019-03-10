import { Component, OnInit } from '@angular/core';

import {FormBuilder} from '@angular/forms';
import { Item, SimpleItem } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  postForm: any;

  searchForm: any;

  latitude = 43.653226;
  longitude = -79.383184;

  mapType = 'roadmap';
  zoom: number = 13;

  items: Item [];

  constructor(private formBuilder: FormBuilder, private itemService: ItemService) { }


  ngOnInit() {
    this.postForm = this.formBuilder.group({
      'title': [''],
      'address': [''],
      'contact': [''],
      'content': [''],
    });
    this.searchForm = this.formBuilder.group({
      'searchTitle': ['']
    });
    this.itemService.getItems().subscribe((resp) => {
      this.items = resp;
    });
  }

  postSubmit() {
    if (this.postForm.dirty) {
      console.log(this.postForm.value);
      const item: SimpleItem = {
        'title': this.postForm.value.title,
        'address': this.postForm.value.address,
        'content': 'lol too lazy',
        'contact': this.postForm.value.contact
      };
      this.itemService.postItem(item).subscribe((resp) => {
        location.reload();
      });
    }
  }


  searchSubmit() {
    if (this.postForm.dirty) {
      console.log(this.searchForm.value); 
    }
  }

  

}


interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  content: string;
}
