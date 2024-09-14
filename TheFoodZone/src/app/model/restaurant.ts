import { Food } from "../model/food";
import { Address } from "./Address";
export type Restaurant= {
  name: any;
  restaurantId?: string;
  restaurantName?: string;
  location?: string;
  cuisine?: string;
  image?: string;
  rating?: string;
  address:{
     area?: string;
    state?: string;
    zipcode?:string;
  }
 foodList: Food[]|undefined;
}
