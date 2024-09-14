import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionlogService {
 private readonly TOKEN_KEY = 'auth_token';
 private isUserLoggedIn: boolean = false;

  constructor() { 
    this.isUserLoggedIn = localStorage.getItem(this.TOKEN_KEY) == 'true';
  }
  login(){
    this.isUserLoggedIn = true;
    localStorage.setItem(this.TOKEN_KEY,'true');
    console.log(this.TOKEN_KEY)
  }
  logout(){
    this.isUserLoggedIn = false;
    localStorage.removeItem(this.TOKEN_KEY);
  }
  isLoggedIn(){
    return this.isUserLoggedIn;
  }
}
