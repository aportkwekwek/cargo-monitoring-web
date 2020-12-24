import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Location{
  latitude: string;
  longitude: string;
  ip: string;
}

@Injectable({
  providedIn: 'root'
})
  
  
export class TestMapService {

  constructor(private http: HttpClient) { }
  

  getLocation() {
    return this.http.get('http://api.ipapi.com/130.105.53.192?access_key=3339073243265ebf2fb338db07ebec51');
  }
}
