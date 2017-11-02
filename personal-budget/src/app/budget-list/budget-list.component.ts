import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject  } from "angularfire2/database";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AuthService } from "../login/login.service";


@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
  providers: [AuthService]
})
export class BudgetListComponent implements OnInit {
  items: AngularFireObject<any[]>;
  cuisines: AngularFireObject<any[]>;
  restaurants: Observable<any[]>;
  budgets: Observable<any[]>;
  user: Observable<firebase.User>;
  person: firebase.User;

  userID: string;
  constructor(public AuthService: AuthService, public db: AngularFirestore) {
   /* this.user = afAuth.authState.map(user => {
      return user;
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userID = user.uid;
      }
    });*/
  }

  ngOnInit() {

      /*this.budgets = this.af.list<Item>('/budget/' + this.userID, {
        query: {
          orderByValue: true
        }
      });*/

/*
    console.log("ngoninit", this.userID);
    this.cuisines = this.af.list<Item>('/cuisines', {
      query: {
        orderByValue: true
      }
    });*/
/*
    this.restaurants = this.af.list<Item>('/restaurants', {
      query: {
        orderByChild: "rating",
        equalTo: 5,
        limitToFirst: 10
      }
    })
      .map(restaurants => {
        restaurants.map(restaurant => {
          restaurant.cuisineType = this.af.object("/cuisines/" + restaurant.cuisine);
          restaurant.featureTypes = [];
          for (let f in restaurant.features) {
            restaurant.featureTypes.push(this.af.object('/features/' + f))
          }
        });
        return restaurants;
      });*/


  }
  addNewItem() {
   /* if (!this.userID)
      return;
    this.af.list("/budget/" + this.userID).push({})
      .then(x => {
        let budget = { name: "test new" };
        let update = {};
        update['budget/' + this.userID + '/' + x.key] = budget;
        this.af.object('/').update(update);
      })*/
  }

}
