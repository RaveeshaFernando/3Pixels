import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(
    public firestore : AngularFirestore
  ) { }

  // getLoggedUser(uid : string){
  //   return this.firestore.collection('Users',ref=>ref.where("status","==",uid)).snapshotChanges();
  // }

}
