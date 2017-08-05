import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  items;

  constructor(public af: AngularFireDatabase) {
    af.list('/budget').subscribe(x =>{
      this.items = x;
      console.log(this.items);
    });
    console.log(this.items);
  }

  ngOnInit() {
  }

}
