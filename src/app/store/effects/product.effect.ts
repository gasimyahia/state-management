import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FailedAction, LOAD, SuccessAction } from "../actions/products.action";
import{ catchError, map, mergeMap } from "rxjs/operators"
import { of } from "rxjs";

@Injectable()
export class ProductEffect{

  productEffect=createEffect(()=> this.actions.pipe(
    ofType(LOAD),
    mergeMap(()=> this.http.get('http://127.0.0.1:8000/api/show?keys=').pipe(
      map((data)=> new SuccessAction(data)),
      catchError((err)=> of(new FailedAction(err)))
    ))
  ));

  constructor(
    private http:HttpClient,
    private actions:Actions
    ){

  }
}
