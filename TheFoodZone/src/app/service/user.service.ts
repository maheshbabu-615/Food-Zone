import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9000/api/v4/register'
 
  constructor(private http:HttpClient) { }
  registerUserData(data:any)
  {
    console.log("inside user service" + data);
    return this.http.post(this.apiUrl,data)
  }
}
