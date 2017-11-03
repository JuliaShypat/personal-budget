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
import { MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./login/login.service";
import { AuthGuard } from "./authGuard.service";
import { MenuComponent } from './shared/menu/menu.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './shared/user-profile/user-profile.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AccountListComponent } from './account-list/account-list.component';


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
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'budgets', canActivate: [AuthGuard], component: BudgetListComponent },
  { path: 'accounts', canActivate: [AuthGuard], component: AccountListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    LoginComponent,
    MenuComponent,
    SidebarComponent,
    DashboardComponent,
    UserProfileComponent,
    AccountListComponent
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
    MatButtonModule,
    MatMenuModule,
    AngularFirestoreModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
