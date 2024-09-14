// cart.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartItem } from '../model/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent  {

    cartItems: CartItem[] = [];

     addItem(form: NgForm) {
      if (form.valid) {
        const newItem: CartItem = {
          productName: form.value.productName,
          quantity: form.value.quantity,
          price: form.value.price
        };
        this.cartItems.push(newItem);
        form.resetForm();
      }
    }
  
    removeItem(index: number) {
      this.cartItems.splice(index, 1);
    }
  
    getTotal() {
      return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }
  }




