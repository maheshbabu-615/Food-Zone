import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class foodService {
 
 
  constructor() { }

  getAll():string[]{
    return [
        '../asserts/FoodImage/burgur.jpg',
        '../asserts/FoodImage/chawmein.jpg',
        '../asserts/FoodImage/chocolate cake.jpg',
        '../asserts/FoodImage/dosa.jpg',
        '../asserts/FoodImage/fast foods.jpg',
        '../asserts/FoodImage/foods.jpg',
        '../asserts/FoodImage/idli.jpg',
        '../asserts/FoodImage/momoes.jpg',
        '../asserts/FoodImage/nodlies.jpg',
        '../asserts/FoodImage/paanipuri.jpg',
        '../asserts/FoodImage/samosa.jpg',
        '../asserts/FoodImage/biryani.jpg'

    ]
  }
}