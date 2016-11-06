import {Injectable, Inject} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {FirebaseApp} from "angularfire2";

@Injectable()
export class UserCheckService {

  UserID: string;

  ref: any;
  auth: any;

  constructor(private _authService: AuthService, @Inject(FirebaseApp) firebaseApp: any) {
    this.ref = firebaseApp.database().ref(); //THis gets a reference to the base Database.
    this.auth = firebaseApp.auth();

    //this.UserID = _authService.getid();


  }


  public checkForRestaurantID() {

    var restaurantRef = this.ref.child('restaurants');
    var users_restaurantRef = this.ref.child('users_restaurant');
    var user = this.auth.currentUser.uid;

    console.log(user);


    users_restaurantRef.child(user).once('value').then(function (snapshot) {

      var exists = (snapshot.val() !== null);

      userAssociatedWithRestaurant(exists);

    });

    function userAssociatedWithRestaurant(exists) {
      if (exists) {
        //If exists then get the key here and populate everything else
        alert('user exists!');
      } else {
        //Create that new Restaurant for the User.
        createRestaurant();
      }
    }

    function createRestaurant() {
      var newPostRef = restaurantRef.push();
      var restaurant_key = newPostRef.key;
      newPostRef.set({
        user: user
      });

      linkUserAndRestaurant(restaurant_key);
    }

    function linkUserAndRestaurant(key) {
      var newRef = users_restaurantRef.child(user);
      newRef.set({
        restaurant: key
      });

    }


  }


  /* CALLNIG THIS DIRETLY WORKS WTF
   test(): void {

   var key = this.restaurantRef.push().key;
   console.log(key);


   this.users_restaurantRef.child(this.UserID).set({restaurantid: key});
   }
   */

  /*
   public testmethod1() {

   var key = this.users_restaurantRef.child(this.UserID).push().key;
   console.log(key);


   }

   public testmethod() {

   var key = this.restaurantRef.push().key;
   console.log(key);


   }

   */


}
