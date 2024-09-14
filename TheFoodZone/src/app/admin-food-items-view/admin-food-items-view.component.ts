import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addRestaurantService } from '../service/add-restaurant.service';

@Component({
  selector: 'app-admin-food-items-view',
  templateUrl: './admin-food-items-view.component.html',
  styleUrls: ['./admin-food-items-view.component.css']
})
export class AdminFoodItemsViewComponent {
restaurants: any;
foods: any;

  constructor(private addrestaurantService:addRestaurantService,private route:Router){}
  data:number | undefined;
  ngOnInit(): void {
    this.data = 51;
    this.restaurantId = this.restaurants.id;
    this.restaurants.getAllItems(this.restaurantId).subscribe((data: any)=>{
      console.log(data);
      
      this.restaurants = data;
      console.log(this.restaurants);
          })

  }

  restaurant:any=[];
  restaurantId!: number;
getItems() {
        this.restaurants.getAllItems(this.restaurantId).subscribe((data: any)=>{
          this.restaurants = data;
        })
      }

          
delete(item:any){
    this.restaurants.deleteItem(item,this.restaurantId).subscribe(
      (data: any)=>{
            alert("item is deleted");
            this.getItems();
    },
      (error: any)=>{
            alert("You are not authorized to delete the item>> ");
    }
    )
    let arr = this.restaurants.filter((res:{restaurantId:any})=>{
      if(res.restaurantId==item){
        return false;
      }
      else{
        return true;
      }
    })
    this.restaurants=arr;
}

update(){
  this.route.navigateByUrl("/adminFoodItem");
}

}