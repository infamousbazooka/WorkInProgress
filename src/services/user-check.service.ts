import {Injectable, Inject} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {FirebaseApp} from "angularfire2";

@Injectable()
export class UserCheckService {

  UserID: string;

  ref: any;


  constructor(private _authService: AuthService, @Inject(FirebaseApp) firebaseApp: any) {
    this.ref = firebaseApp.database().ref(); //THis gets a reference to the base Database.
    this.UserID = _authService.getid();


  }


  public checkForRestaurantID() {

    var restaurantRef = this.ref.child('restaurants');
    var users_restaurantRef = this.ref.child('users_restaurant');


    users_restaurantRef.child(this.UserID).once('value').then(function (snapshot) {

      var exists = (snapshot.val() !== null);

      userExistsCallback(exists);

    });

    function userExistsCallback(exists) {
      if (exists) {
        alert('user exists!');
      } else {
        alert('user does not exist!');
      }
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
