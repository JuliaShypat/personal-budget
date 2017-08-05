import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  providerFacebook = new firebase.auth.FacebookAuthProvider();
  providerGoogle = new firebase.auth.GoogleAuthProvider();
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    console.log(this.user);
  }
  NgOnInit() {

  }
  loginFacebook() {
    this.afAuth.auth.signInWithPopup(this.providerFacebook);
  }
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(this.providerGoogle);
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
