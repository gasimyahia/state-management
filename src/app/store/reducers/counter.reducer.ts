import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DECREAMENT, INCREAMENT } from "../actions/counter.action";

export interface Counter{
  n:number;
}
let initialState={
  n:0,
}


export function counterReducer(state=initialState,action:any){
  switch(action.type){
    case INCREAMENT:
      return {
        ...state,
        n:state.n + action.payload
      }
    case DECREAMENT:
      return {
        ...state,
        n:state.n - action.payload
      }
    default:
      return state;
  }
}

let counterSelector=createFeatureSelector<Counter>('counter');
export let nSelector=createSelector(counterSelector,state=> state.n);

