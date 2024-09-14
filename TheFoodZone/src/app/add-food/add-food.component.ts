import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { addRestaurantService } from '../service/add-restaurant.service';
@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddItemsComponent {
  addrestaurantService: any;
  role: string;
 

  constructor(private fb:FormBuilder,private addrestaurant:addRestaurantService,private route:Router){}
  
  
  addform:any=this.fb.group({
    foodId:['',Validators.required],
   foodName:['',Validators.required],
   foodCost:['',Validators.required],
   foodType:['',Validators.required],
  foodImage:['',Validators.required]
})

addItem(){
  console.log(this.addform.value)
  if(this.role =="admin@gmail.com"){
    if(this.addform.value){
      this.addrestaurantService.getAllRestaurants(this.addform.value).subscribe(
        response =>{
          alert(`foods is added successfully`+response);
          this.addrestaurantService.update.emit(true);
          this.addform.reset();
          this.route.navigateByUrl("");
        },
        error =>{
          alert(`all the particulars`+error);
        } 
      )
    }
  }else{
    alert("you are not authorized to add or delete" + Error)
  }
}
}
