import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import * as firebase from "firebase";
import { Routes, RouterModule } from "@angular/router";
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./login/login.service";
import { AuthGuard } from "./authGuard.service";


export const firebaseConfig = {
  apiKey: "AIzaSyCiHx0l88OuPLYHE4k8vbaqyaYDWhoFFjc",
  authDomain: "personalbudget-79daa.firebaseapp.com",
  databaseURL: "https://personalbudget-79daa.firebaseio.com",
  projectId: "personalbudget-79daa",
  storageBucket: "personalbudget-79daa.appspot.com",
  messagingSenderId: "721362803306"
};

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: BudgetListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
