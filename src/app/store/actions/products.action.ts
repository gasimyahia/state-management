import { storeInterface } from "../store";

export const SUCCESS='[Products] success';
export const FALIED='[Products] failed';
export const LOAD='[Products] load';

export class LoadProductsAction{
  type:string= LOAD;
}

export class SuccessAction{
  type:string= SUCCESS;
  payload:any;
  constructor(payload:any){
    this.payload=payload;
  }
}

export class FailedAction{
  type:string= FALIED;
  payload:any;
  constructor(payload:any){
    this.payload=payload;
  }
}

