import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AuthService} from "./login.service";
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  passwordFormControl = new FormControl('', [
    Validators.required]);

  user: Observable<firebase.User>;
  displayName: string;
  photoURL: string;
  providerFacebook = new firebase.auth.FacebookAuthProvider();
  providerGoogle = new firebase.auth.GoogleAuthProvider();
  constructor(private afAuth: AngularFireAuth, private AuthService: AuthService) {
    this.user = afAuth.authState;
    console.log(this.user);

  }
  ngOnInit() {
    this.afAuth.authState.subscribe(authState => {
      if (!authState) {
        this.displayName = null;
        this.photoURL = null;
        return;
      }

      this.displayName = authState.displayName;
      this.photoURL = authState.photoURL;

    })
  }
  loginFacebook() {
    this.AuthService.loginFacebook();
  }
  loginGoogle() {
    this.AuthService.loginGoogle();
  }
  register() {
    this.AuthService.register();
  }
  logout() {
    this.AuthService.logout();
  }

}
