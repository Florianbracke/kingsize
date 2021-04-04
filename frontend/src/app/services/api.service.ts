import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url:string = 'http://localhost:5000/';

  constructor(private http: HttpClient){}
  
   getData() {
    console.log(this.http.get(this._url))
      return this.http.get(this._url);

    }
}
