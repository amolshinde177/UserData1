import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Album } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

    apiUrl= 'https://jsonplaceholder.typicode.com/photos';
  
  constructor(private _http: HttpClient) { }
  getUsers(){
     return this._http.get<Album[]>(this.apiUrl);
  }
  
}