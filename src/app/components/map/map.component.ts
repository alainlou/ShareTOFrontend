import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Item, SimpleItem } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  postForm: FormGroup;
  searchForm: FormGroup;

  latitude = 43.7722329;
  longitude = -79.50668879999999;

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
      'title': ['']
    });
    this.getItems();
  }

  getItems() {
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
        'content': this.postForm.value.content,
        'contact': this.postForm.value.contact
      };
      this.itemService.postItem(item).subscribe((resp) => {
        this.getItems();
      });
    }
  }


  searchSubmit() {
    if (this.searchForm.dirty) {
      this.itemService.getItemByTitle(this.searchForm.value.title).subscribe((resp) => {
        this.items = resp;
      });
    }
  }
}

