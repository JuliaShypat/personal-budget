import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
//import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-expences',
  templateUrl: './expences.component.html',
  styleUrls: ['./expences.component.css']
})
export class ExpencesComponent implements OnInit {
  user: firebase.User;
  expencesCollection: AngularFirestoreCollection<any>;
  expences: Observable<any[]>
  displayedColumns = ['type', 'title', 'amount', 'currency'];
  dataSource: any;

  constructor(private afAuth: AngularFireAuth, public db: AngularFirestore) {
    this.user = firebase.auth().currentUser;
    this.expencesCollection = this.db.collection<any>('users').doc(this.user.uid).collection<any>('entries', ref => ref.where('type', '==', "OUTC"));

    this.expences = this.expencesCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Account;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });

    let subscription = this.expences.subscribe(
      value => {
        //this.dataSource = new MatTableDataSource<Element>(value);

      },
      error => console.error(error)
    );
  }
  ngOnInit() {
  }

}
