import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { auth } from 'firebase/app';

import { UserModel } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  addNewUser : UserModel = new UserModel(); 
  user : User ; 

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ){  
  //   this.afAuth.authState.subscribe(user => {
  //     if (user){
  //       this.user = user;
  //       localStorage.setItem('user', JSON.stringify(this.user));
  //     } else {
  //       localStorage.setItem('user', null);
  //     }
  //   })
  }

  // async login(email: string, password: string) {
  //   var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //   this.router.navigate([' ']);
  // }

  // async register(email: string, password: string) {
  //   var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //   this.sendEmailVerification();
  // }

  // async sendEmailVerification() {
  //   await this.afAuth.auth.currentUser.sendEmailVerification()
  //   this.router.navigate(['signin']);
  // }

  // async sendPasswordResetEmail(passwordResetEmail: string) {
  //   return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  // }

  // async logout(){
  //   await this.afAuth.auth.signOut();
  //   localStorage.removeItem('user');
  //   this.router.navigate(['signin']);
  // }

  // get isLoggedIn(): boolean {
  //   const  user  =  JSON.parse(localStorage.getItem('user'));
  //   return  user  !==  null;
  // }


}
