import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
  export class addRestaurantService{
  private apiUrl = 'http://localhost:9000/api/v5';
  updated:EventEmitter<boolean>=new EventEmitter();
  constructor(private http: HttpClient) { }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    const errorMessage = error.error instanceof ErrorEvent ?
      `Client-side error: ${error.error.message}` :
      `Server-side error: ${error.status} - ${error.message}`;
    return throwError(errorMessage);
  }

   saveRestaurant(restaurant: any) {
    console.log(restaurant)
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem("token")
    });
    console.log(localStorage.getItem("token"));
    let requestOption = {headers:httpHeader}
    return this.http.post(`${this.apiUrl}/save`,restaurant,requestOption);
  }


  getAllRestaurants(): Observable<Array<Restaurant>> {
    console.log("in restaurant service")
    return this.http.get<Array<Restaurant>>(`${this.apiUrl}/restaurant`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRestaurantForParticularId(restaurantId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${restaurantId}/foods`);
  }

}