import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';


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
  isFormVisible: boolean = false;

  constructor(private afAuth: AngularFireAuth, public db: AngularFirestore) {
    this.user = firebase.auth().currentUser;
  }

  ngOnInit() {
    this.accountsCollection = this.db.collection<any>('users').doc(this.user.uid).collection<any>('accounts');
    this.accounts = this.accountsCollection.valueChanges();
  }
  showForm() {
    this.isFormVisible = true;
  }
  addNewAccount(form: NgForm) {
    console.log(form.value);
    const newAccount = {
      account_name: form.value.title,
      bank: form.value.bank,
      balance: form.value.balance,
      currency: form.value.currency
    }
    this.db.collection("users").doc(this.user.uid).collection<any>('accounts').add(newAccount)
    .then(function(docRef) {
        console.log(docRef);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
}
