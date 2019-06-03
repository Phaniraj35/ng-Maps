import { Component } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 12.9716;
  lng: number = 77.5946;

  mapClicked($event: AGMMouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

}