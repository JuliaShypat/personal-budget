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
  user: Observable<firebase.User>;
  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>

  constructor(public AuthService: AuthService, private afAuth: AngularFireAuth, public db: AngularFirestore) {
    this.user = afAuth.authState.map(user => {
      return user;
    });

    this.itemCollection = this.db.collection<any>('users');
    this.items = this.itemCollection.valueChanges();
    console.log(this.items);
  }

  ngOnInit() {

  }
  addNewItem() {
    this.db.collection("users").add({
      first: "Test",
      last: "Testowy",
      born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

}
