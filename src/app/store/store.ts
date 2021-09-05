import { ActionReducerMap } from "@ngrx/store";
import { Counter, counterReducer } from "./reducers/counter.reducer";
import { Product, ProductReducer } from "./reducers/product.reducer";

export interface storeInterface{
  counter:Counter;
  products:Product[]
}

export const Reduces:ActionReducerMap<storeInterface>={
  counter:counterReducer,
  products:ProductReducer
}



