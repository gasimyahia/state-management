import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadProductsAction } from '../store/actions/products.action';
import { storeInterface } from '../store/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private store:Store<storeInterface>) {
    this.store.subscribe(data => console.log(data.products));
   }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.store.dispatch(new LoadProductsAction());
  }

}
