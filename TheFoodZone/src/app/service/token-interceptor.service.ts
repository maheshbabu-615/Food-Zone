import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor() { }
  intercept(req, next) {
    const token = localStorage.getItem('token');

    let tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(tokenReq);
  }
  getuserEmail():string{
    const token = localStorage.getItem("token");
    console.log(token)
    const decodedToken: {[Key: string]: any} = jwtDecode(token);
    const userEmail=decodedToken?.['sub'];
    console.log(userEmail)
    return userEmail;
  }
}

