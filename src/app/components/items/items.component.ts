import { Component, OnInit } from '@angular/core';

import {FormBuilder} from '@angular/forms'

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

  markers: marker[] = [
	  {
		  lat: 43.653226,
		  lng: -79.383184,
		  label: '',
      draggable: false,
      content: 'free iPhone'
	  },
	  {
		  lat: 43.7722329,
		  lng: -79.50668879999999,
		  label: '',
      draggable: false,
      content: 'free Mac'
	  },
	  {
		  lat: 43.663222,
		  lng: -79.383184,
		  label: '',
      draggable: false,
      content: 'free something'
	  }
  ]

  postSubmit() {
    if (this.postForm.dirty) {
      console.log(this.postForm.value); 
    }
  }


  searchSubmit() {
    if (this.postForm.dirty) {
      console.log(this.searchForm.value); 
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      'postTitle': [''],
      'postAddress': [''],
      'postContact': ['']
    });
    this.searchForm = this.formBuilder.group({
      'searchTitle': ['']
    });
  }


  ngOnInit() {

  }

}


interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  content: string;
}
