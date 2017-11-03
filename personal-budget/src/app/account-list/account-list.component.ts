import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  user: firebase.User;
  accountsCollection: AngularFirestoreCollection<any>;
  accounts: Observable<any[]>
  counter: number = 1;

  constructor(private afAuth: AngularFireAuth, public db: AngularFirestore) {
    this.user = firebase.auth().currentUser;
  }

  ngOnInit() {
    this.accountsCollection = this.db.collection<any>('users').doc(this.user.uid).collection<any>('accounts');
    this.accounts = this.accountsCollection.valueChanges();
  }

}
