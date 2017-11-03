import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AuthService } from "../login/login.service";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
export interface Item { name: string; }



@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
  providers: [AuthService]
})
export class BudgetListComponent implements OnInit {
  user: firebase.User;
  budgetsCollection: AngularFirestoreCollection<any>;
  budgets: Observable<any[]>
  counter: number = 1;

  constructor(public AuthService: AuthService, private afAuth: AngularFireAuth, public db: AngularFirestore) {
    this.user = firebase.auth().currentUser;
  }

  ngOnInit() {
    this.budgetsCollection = this.db.collection<any>('users').doc(this.user.uid).collection<any>('budgets');
    this.budgets = this.budgetsCollection.valueChanges();
  }
  addNewItem() {
    const self = this;
    this.db.collection("users").doc(this.user.uid).collection<any>('budgets').add({
      name: "Test"+this.counter,
    })
    .then(function(docRef) {
        console.log(docRef);
        self.counter +=1;
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

}
