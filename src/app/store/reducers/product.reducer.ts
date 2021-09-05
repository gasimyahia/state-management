import { FALIED, SUCCESS } from "../actions/products.action";

export interface Product{
  id:number;
  name:string;
  cat_id:number;
  brand_id:number;
  desc:string;
  price:number;
  image:string;
  imgpath:string;
  cat_name:string;
  brand_name:string;
}

export function ProductReducer(state:Product[],action:any){
  switch(action.type){
    case SUCCESS:
      return action.payload;
    case FALIED:
      console.log('error',action.payload);
      return state;
  }
}
