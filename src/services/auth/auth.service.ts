import { Injectable } from '@angular/core';
import {FirebaseAuthState, AngularFire, FirebaseAuth} from "angularfire2";
import {Observable, Subject} from "rxjs";

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState = null;



  constructor(private auth$: FirebaseAuth) {


    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });

  }

  getauthenticated(): boolean {
    console.log("isauthenticated? " + this.authState)
    return this.authState !== null;
  }

  getid(): string {
    console.log("uid " + this.authState.uid)
    return this.getauthenticated() ? this.authState.uid : '';
  }


  register(email: string, password: string): Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(this.auth$.createUser({email, password}));

  }

  login(email: string, password: string): Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(this.auth$.login({email, password}));

  }


  fromFirebaseAuthPromise(promise): Observable<any> {
    const subject = new Subject<any>();

    promise
      .then(res => {
        subject.next(res);
        subject.complete();
      }, err => {
        subject.error(err);
        subject.complete();
      });

    return subject;

  }


}
