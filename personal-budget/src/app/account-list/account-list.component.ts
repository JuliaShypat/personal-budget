import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';

export interface Account { account_name: string, balance: string, bank: string, currency: string }

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
    this.accountsCollection = this.db.collection<any>('users').doc(this.user.uid).collection<any>('accounts');
    this.accounts = this.accountsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Account;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  ngOnInit() {

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
    this.accountsCollection.add(newAccount)
      .then(function (docRef) {
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
  update(item: Account) {

  }

  deleteAccount(id) {
    this.accountsCollection.doc(id).delete().then(function () {
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}
