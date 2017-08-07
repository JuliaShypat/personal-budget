import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable() // <<<=== required if the constructor has parameters 
export class AuthService {
    user: Observable<firebase.User>;
    displayName: string;
    photoURL: string;
    logedIn: boolean = false;
    providerFacebook = new firebase.auth.FacebookAuthProvider();
    providerGoogle = new firebase.auth.GoogleAuthProvider();
    constructor(private afAuth: AngularFireAuth, private router: Router) {

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
        this.afAuth.auth.signInWithPopup(this.providerFacebook)
            .then(authState => {
                console.log("AFTER Login", authState);
                this.logedIn = true;
                this.router.navigate(["/dashboard"]);
            });
    }
    loginGoogle() {
        this.afAuth.auth.signInWithPopup(this.providerGoogle)
            .then(authState => {
                console.log("AFTER Login", authState);
                this.logedIn = true;
                this.router.navigate(["/dashboard"]);
            });
    }
    register() {
        this.afAuth.auth.createUserWithEmailAndPassword("aaa@aaa", "aaa")
            .then(authState => {
                console.log("Register", authState);
                authState.auth.sendPasswordResetEmail();
            })
            .catch(error => console.log("Register-error", error))
    }
    logout() {
        this.afAuth.auth.signOut();
        this.logedIn = false;
    }

    isLogedIn() {
        const promise = new Promise(
            (resolve, reject) => {
                resolve(this.isLogedIn);
            }
        );
        return promise;
    }
}