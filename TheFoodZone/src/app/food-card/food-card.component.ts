// food-card.component.ts
import { Component, Input } from '@angular/core';
import { Food } from '../model/food';
interface food {
    image: string;
    name: string;
}

@Component({
    selector: 'app-food-card',
    templateUrl: './food-card.component.html',
    styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
    
  foods: Food[] = [
    { name: 'Burgur', image: 'assets/FoodImage/burgur.jpg' },
    { name: 'Chawmein', image: 'assets/FoodImage/chawmein.jpg' },
    { name: 'Chocolate Cake', image: 'assets/FoodImage/chocolate cake.jpg'},
    { name: 'Dosa', image: 'assets/FoodImage/dosa.jpg'},
    { name: 'Fast Foods', image: 'assets/FoodImage/fast foods.jpg'},
    { name: 'Foods', image: 'assets/FoodImage/foods.jpg'},
    { name: 'Idli', image: 'assets/FoodImage/idli.jpg'},
    { name: 'Momoes', image: 'assets/FoodImage/momoes.jpg'},
    { name: 'Nodlies', image: 'assets/FoodImage/nodlies.jpg'},
    { name: 'Paani Puri', image: 'assets/FoodImage/paanipuri.jpg'},
    { name: 'samosa', image: 'assets/FoodImage/samosa.jpg'},
    { name: 'biryani', image: 'assets/FoodImage/biryani.jpg'}
    
  ];
  constructor(){}
  
  orderNow() {
  }
}


