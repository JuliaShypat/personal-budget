import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import * as firebase from "firebase";

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCiHx0l88OuPLYHE4k8vbaqyaYDWhoFFjc",
  authDomain: "personalbudget-79daa.firebaseapp.com",
  databaseURL: "https://personalbudget-79daa.firebaseio.com",
  projectId: "personalbudget-79daa",
  storageBucket: "personalbudget-79daa.appspot.com",
  messagingSenderId: "721362803306"
};

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
