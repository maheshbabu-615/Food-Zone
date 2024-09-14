import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddItemsComponent } from './add-food/add-food.component';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { SearchComponent } from './search/search.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { CartComponent } from './cart/cart.component';
import { addRestaurantService } from './service/add-restaurant.service';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import { AdminFoodItemsViewComponent } from './admin-food-items-view/admin-food-items-view.component';
import { AdminRestaurantViewComponent } from './admin-restaurant-view/admin-restaurant-view.component';
import { RestaurantComponent } from './restaurant/restaurant.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    RestaurantListComponent,
    SearchComponent,
    FoodListComponent,
    FoodCardComponent,
    CartComponent,
    RestaurantCardComponent,
    RestaurantAddComponent,
    AdminComponent,
    AdminFoodItemsViewComponent,
    AdminRestaurantViewComponent,
    AddItemsComponent,
    RestaurantComponent,
  
   
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    
   
    
  ],
  providers: [addRestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }

