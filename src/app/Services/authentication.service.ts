import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { auth } from 'firebase/app';
import { UserModel } from '../Models/user.model';


import { Observable, BehaviorSubject } from 'rxjs';
import { map, first } from 'rxjs/operators';




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
  ){  }

  signUp(email: string, password: string, firstName: any, lastName: any, mobile: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SendVerificationMail();
        this.SetUserData(result.user,firstName,lastName,email,mobile);
        console.log(result);
        this.router.navigate(['']);
      }).catch((error) => {11
        window.alert(error.message);
      });
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
