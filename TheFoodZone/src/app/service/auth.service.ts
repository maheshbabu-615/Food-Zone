import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  constructor(private http: HttpClient) { }
  saveUser(userDetails: any) {
    console.log("inside auth services")
    return this.http.post(`http://localhost:9000/api/v2/save`, userDetails, {
      observe: 'response', withCredentials: true
    });
  }
  loginUser(user: any) {
    this.isAuthenticated = true;
    return this.http.post(`http://localhost:9000/api/v2/login`,user, {responseType: 'text', withCredentials: true});
  }
  private isAuthenticated = false;

  logout(){
    this.isAuthenticated = false;
  }
  isAuthenticatedUser(){
    return this.isAuthenticated;
  }
}
