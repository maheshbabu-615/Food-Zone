import { Component } from '@angular/core';

interface Restaurant {
  image: string;
  name: string;
}  

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  loggedIn: boolean = false;
  restaurants: Restaurant[] = [
    { name: 'Stricker', image: 'assets/RestaurantImage/stricker.jpg' },
    { name: 'smoke-spice', image: 'assets/RestaurantImage/smoke-spice.jpg' },
    { name: 'skyHouse', image: 'assets/RestaurantImage/skyHouse.jpg'},
    { name: 'roof', image: 'assets/RestaurantImage/roof.jpeg'},
    { name: 'restaurantImg', image: 'assets/RestaurantImage/restaurantImg.jpg'},
    { name: 'paradise', image: 'assets/RestaurantImage/paradise.jpg'},
    { name: 'navarantha', image: 'assets/RestaurantImage/navaratna.jpg'},
    { name: 'chaatGali', image: 'assets/RestaurantImage/ChaatGali.jpg'},
    { name: 'barbeque', image: 'assets/RestaurantImage/barbeque.jpg'},
    { name: 'abejo', image: 'assets/RestaurantImage/abejo.jpg'},
    { name: 'mayuri', image: 'assets/RestaurantImage/mayuri.jpg'},
    { name: 'nawab', image: 'assets/RestaurantImage/nawab.jpg'}
    
  ];
  constructor(){this.loggedIn = true;}
  
  orderNow() {
    
  }
}

