import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  user: firebase.User;
  generalColection: AngularFirestoreCollection<any>;
  generals: Observable<any[]>

  constructor(private afAuth: AngularFireAuth, public db: AngularFirestore) {
    this.user = firebase.auth().currentUser;
    //this.accountsCollection = this.db.collection<any>('users').doc(this.user.uid).collection<any>('accounts');
    this.generalColection = this.db.collection<any>('users').doc(this.user.uid).collection<any>('general');
    this.generals = this.generalColection.snapshotChanges().map(generals => {
        return generals.map(g => {
          const data = g.payload.doc.data() as Account;
          const id = g.payload.doc.id;
          return { id, ...data };
        });
      });
}

  ngOnInit() {
    console.log(this.generals);
  }

  updateBalance(form: NgForm, general) {
    const newBalance = {
      currentValue: form.value.balance,
      previousValue: general.currentValue
    }
    console.log(newBalance);
    this.generalColection.doc("balance").set(newBalance)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

  }

  addBalance(form: NgForm) {
    const newBalance = {
      currentValue: form.value.balance,
      previousValue: form.value.balance
    }
    console.log(newBalance);
    this.generalColection.doc("balance").set(newBalance)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

  }
}
