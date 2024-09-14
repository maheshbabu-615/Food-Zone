import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { addRestaurantService } from '../service/add-restaurant.service';
import { TokenInterceptorService } from '../service/token-interceptor.service';
import { Router } from '@angular/router';
import { Address } from '../model/Address';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent {
update: any;
constructor(private fb:FormBuilder,private addrestaurantService:addRestaurantService,private route:Router,
  private tokenService:TokenInterceptorService) {}

  role = this.tokenService.getuserEmail();
  userLoggedIn?:string;
  restaurants:any=[];

  addform = this.fb.group({
    restaurantId:['', Validators.required],
    restaurantName: ['',Validators.required],
    location:['',Validators.required],
    cuisine: ['',Validators.required],
    image:['',Validators.required],
    rating:['',Validators.required],
    area:['',Validators.required],
    state:['',Validators.required],
    zipcode:['',Validators.required] 
  });
  
  addRestaurant(){
    console.log(this.addform.value)
    if(this.role =="admin@gmail.com"){
      if(this.addform.valid){
        this.addrestaurantService.saveRestaurant(this.addform.value).subscribe(
          response=>{
            alert(`restaurant is added successfully` +response);
            this.addrestaurantService.updated.emit(true);
            this.addform.reset();
             this.route.navigateByUrl("");
          },
          error=>{
            alert('add all the particulars' + error);
          }  
        )
      }
    }else{
      alert("You are not authorized to add or delete"+Error);
    }
  }
}
