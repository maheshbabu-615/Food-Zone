import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Restaurant {
image: string;
name: string;
}

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent {
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
  constructor(){}
  
  orderNow(){}
}

