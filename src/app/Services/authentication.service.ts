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
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ){ 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
   }

  async signUp(email: string, password: string, firstName: any, lastName: any, mobile: any) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.SetUserData(result.user, firstName, lastName, email, mobile);
      this.router.navigate(['']);
    }
    catch (error) {
      11;
      window.alert(error.message);
    }
  }

  async signIn(email: string, password: string){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
    }
    catch (error) {
      window.alert(error.message);
    }
  }

  SetUserData(user: User,fName: any,lName: any,Email: string,Mobile: any) {
    this.afs.collection('Users').doc(user.uid).set({
      uid : user.uid,
      email : Email ,
      fistName : fName,
      lastName : lName,
      mobile : Mobile
    })
  }


  
}
