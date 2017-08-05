import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;

  constructor(public af: AngularFireDatabase) {
  }

  ngOnInit() {
    this.cuisines = this.af.list('/cuisines', {
      query: {
        orderByValue: true
      }
    });
    this.restaurants = this.af.list('/restaurants',{
      query:{
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
            restaurant.featureTypes.push(this.af.object('/features/'+ f))
          }
        });
        return restaurants;
      });

      this.af.list("/restaurants").push({name: ''})
      .then(x => {
        let restaurant = {name: "my new restaurant"};
        let update = {};
        update['restaurants/'+x.key] = restaurant;
        update['restaurants-by-city/warsaw/'+ x.key] = restaurant;

        this.af.object('/').update(update);
      })
  }

}
