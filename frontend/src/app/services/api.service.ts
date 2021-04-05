import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user } from '../controllers/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private _url:string = 'http://localhost:3000/';
  private _urlUpdate:string= 'http://localhost:3000/login'

  constructor(private http: HttpClient){}
  
   getData(): Observable<user>  {
   
      return this.http.get<user>(this._url);

    }

    updateData(): Observable<user> {
      return this.http.get<user>(this._url);
    }


    
}
