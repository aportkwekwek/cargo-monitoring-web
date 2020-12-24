import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface Tasks{
  id: String[];
  driver: String[];
  task: String[];
  dateCreated: String[];
  isApproved: String[];
}


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  
  readonly CON_URL = "https://test-app1001.herokuapp.com/api";

  readonly CON_URLtest = "http://localhost:3000/api";

  constructor(private httpClient : HttpClient) { }

  getTasks(): Observable<any>{
    return this.httpClient.get(this.CON_URLtest + '/get-tasks');
  }

}
