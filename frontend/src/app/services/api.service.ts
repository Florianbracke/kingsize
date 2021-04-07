import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { user } from '../controllers/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

  private _url:string = 'http://localhost:3000/';

  private _urlNewUserProfile:string= 'http://localhost:3000/login/'

  constructor(private http: HttpClient,  ){}
  
  postData = {
    email: "123",
    password: '321'
  };

  getData(): Observable<user>  {
    return this.http.get<user>(this._url);
  }
    // !!this function is in login component but should end up here -> cant reach data without circular dependencies
  // NewUserProfileData(): Observable<user> {
  //   return this.http.post<any>('http://localhost:3000/login', this.postData);
  // }

 

}
