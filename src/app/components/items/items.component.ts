import { Component, OnInit } from '@angular/core';
import { ITEMS, Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {
  items: Item[] = ITEMS;

  latitude = 43.653226;
  longitude = -79.383184;

  mapType = 'roadmap';
  zoom: number = 12;

  markers: marker[] = [
	  {
		  lat: 43.653226,
		  lng: -79.383184,
		  label: 'A',
      draggable: false,
      content: 'free iPhone'
	  },
	  {
		  lat: 43.643310,
		  lng: -79.383184,
		  label: 'B',
      draggable: false,
      content: 'free Mac'
	  },
	  {
		  lat: 43.663222,
		  lng: -79.383184,
		  label: 'C',
      draggable: false,
      content: 'free something'
	  }
  ]

  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.latitude;
      });
    } else { 
      this.latitude = 43.653226;
      this.longitude = -79.383184;
    }
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
