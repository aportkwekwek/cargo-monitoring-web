import { Observable } from 'rxjs';
import { TokenStorageService } from './../../_services/token-storage.service';
import { TestMapService } from './../../_services/test-map.service';

import { Component, OnInit } from '@angular/core';
import { Drivers, UserService } from '../../_services/user.service';
import { rejects } from 'assert';


declare const L: any;

@Component({
  templateUrl: 'viewtrucks.component.html'
})
export class ViewTrucksComponent implements OnInit {


  lat: string = '';
  lng: string = '';

  location: Object;
  
  results = [];

  constructor(
    private map: TestMapService,
    private _tokenStorageService: TokenStorageService,
    private _userService :UserService
  ) { }

  getDrivers() {
    
    
  }
  
  ngOnInit() {

    var truckIcon = L.icon({
      iconUrl: '../assets/img/truck.png',
      shadowUrl: '',
  
      iconSize:     [38, 50], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  

    if (!navigator.geolocation) {
      console.log('location not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      let mymap = L.map('map').setView([coords.latitude, coords.longitude], 12);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXBvcnRrd2Vrd2VrIiwiYSI6ImNraXN0MnZ3MzEwc2YydGwzbDltNndtN28ifQ.Dlm3jJIf96bTmyWM54A3BQ', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYXBvcnRrd2Vrd2VrIiwiYSI6ImNraXN0MnZ3MzEwc2YydGwzbDltNndtN28ifQ.Dlm3jJIf96bTmyWM54A3BQ'
      }).addTo(mymap);
      var marker = L.marker([coords.latitude, coords.longitude]).addTo(mymap);
      marker.bindPopup(`<b>${this._tokenStorageService.user_name}</b>`).openPopup();

      this._userService.getDrivers().subscribe(
        data => {
          for (let i = 0; i < data.length; i++){
            L.marker([data[i].latitude, data[i].longitude],{icon: truckIcon}).bindPopup(data[i].name).addTo(mymap);

          }
        }
      )
      
    

    });

    this.watchPosition();

  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      
      if (position.coords.latitude === desLat) {
        navigator.geolocation.clearWatch(id);
        };
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      maximumAge: 0
    });
  }
}
