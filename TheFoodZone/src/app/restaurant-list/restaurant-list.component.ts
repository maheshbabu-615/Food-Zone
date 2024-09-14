import { Component, OnInit } from '@angular/core';
import { addRestaurantService } from '../service/add-restaurant.service';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];

  
  
  constructor(private addrestaurantService: addRestaurantService) {}

  ngOnInit(): void {
    this.addrestaurantService.getAllRestaurants().subscribe({
      next:(data)=>{
        this.restaurants = data;
      },
      error:err=>{
        alert(err);
      }
    });
  }
  onSearchTextChanged(restaurantName: string) {
    this.addrestaurantService.getAllRestaurants().subscribe({
      next: (data) => {
        if (this.restaurants || restaurantName !== '') {
          this.restaurants = this.restaurants.filter((restaurant) =>
            restaurant.name?.toLowerCase().includes(restaurantName.toLowerCase())
          );
        } else {
          this.restaurants = data;
        }
      },
    });
  }
}