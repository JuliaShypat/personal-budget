import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase/app';
import { Routes, RouterModule } from '@angular/router';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/login.service';
import { AuthGuard } from './authGuard.service';
import { MenuComponent } from './shared/menu/menu.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './shared/user-profile/user-profile.component';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AccountListComponent } from './account-list/account-list.component';
import { BalanceComponent } from './balance/balance.component';
import { ExpencesComponent } from './expences/expences.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCiHx0l88OuPLYHE4k8vbaqyaYDWhoFFjc',
  authDomain: 'personalbudget-79daa.firebaseapp.com',
  databaseURL: 'https://personalbudget-79daa.firebaseio.com',
  projectId: 'personalbudget-79daa',
  storageBucket: 'personalbudget-79daa.appspot.com',
  messagingSenderId: '721362803306'
};

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'budgets', canActivate: [AuthGuard], component: BudgetListComponent },
  { path: 'accounts', canActivate: [AuthGuard], component: AccountListComponent },
  { path: 'expences',  canActivate: [AuthGuard], component: ExpencesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    LoginComponent,
    MenuComponent,
    SidebarComponent,
    DashboardComponent,
    UserProfileComponent,
    AccountListComponent,
    BalanceComponent,
    ExpencesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [AuthService, AuthGuard, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
