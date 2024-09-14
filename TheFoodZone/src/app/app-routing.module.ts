import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { AddItemsComponent } from './add-food/add-food.component';
import { CartComponent } from './cart/cart.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent }, 
  { path: 'food-card', component: FoodCardComponent},
  { path: 'restaurant-card:/id', component: RestaurantCardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'add-food', component: AddItemsComponent},
  { path: 'restaurant-add', component: RestaurantAddComponent},
  { path: 'cart', component: CartComponent},
  { path: 'food-card', component: FoodCardComponent},
  { path: 'restaurant', component: RestaurantComponent},
  
  

  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
