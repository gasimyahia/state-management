import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecreamentAction, IncreamentAction } from './store/actions/counter.action';
import { nSelector } from './store/reducers/counter.reducer';
import { storeInterface } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number=0;

  constructor(private store:Store<storeInterface>){
    this.store.select(nSelector).subscribe(data=>{
      this.count=data;
    })
  }

  increase(){
    this.store.dispatch(new IncreamentAction(2));
  }
  decrease(){
    this.store.dispatch(new DecreamentAction(2));
  }

}
