import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { UserModel } from '../Models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;  
  log : any = null;
  
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ){ 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.userData = user;
        this.afs.collection("Users").doc(user.email).get().subscribe(data=>{
          localStorage.setItem('userLog', JSON.stringify(data.data()))
          this.log = data.data();
        })
      } else {
        localStorage.setItem('userLog', null);
      }
    })
   }


  async signUp(email: string, password: string, firstName: any, lastName: any, mobile: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.uid
        this.SetUserData(result.user,firstName,lastName,mobile);
        this.router.navigate(['']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  async signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  async signOut() {
    console.log("camhe here");
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('userLog');
      this.log = null ;
      this.router.navigate(['wearethebest']);
    });
  }

  SetUserData(user,fName : string,lName : string ,tel : string) {
    this.afs.collection('Users').doc(user.email).set({
      email : user.email ,
      firstName : fName,
      lastName : lName,
      mobile : tel
    })
  }
  
}
