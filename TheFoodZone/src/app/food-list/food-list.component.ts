// food-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { Food } from '../model/food';
import { addRestaurantService } from '../service/add-restaurant.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  restaurantId:string ='';
  foods:Food[]=[];

  constructor(private addrestaurantService:addRestaurantService ){}

  ngOnInit(): void {
 
    this.addrestaurantService['getFoodsForRestaurantId'](this.restaurantId).subscribe({
    next:(data: any) =>{
      this.foods = data;
    },
    error:(err: any) =>{
      alert(err);
    }
  })
  this.addrestaurantService['getFoodsForRestaurantId'](this.restaurantId).subscribe((result: any) => {
    this.foods = result;
  });
}
}


