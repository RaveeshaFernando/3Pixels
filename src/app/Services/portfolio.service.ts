import { Injectable } from '@angular/core';
// import { Portfolio } from  '../Models/portfolio.model';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Portfolio } from '../Models/portfolio.model';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  downloadURL: Observable<string>;
  photoId  : string ;
  photo : any ;
  defaultPhotolist : any ;
  collectionName = null ;
 

  constructor(
    // public portfolio : Portfolio,
    public store: AngularFireStorage, 
    public firestore: AngularFirestore,
  ) { }

  uploadImage(event : any,imageName :string) {
    let file = event.target.files[0];
    let path = `portfolio-def/${imageName}`;
    if(imageName=='optional'){
      let path = `portfolio-opt/${file.name}`;
    }

    if (file.type.split('/')[0] !== 'image'){
      return alert('Error in upload image');
    } 
    else {
      let ref = this.store.ref(path);
      let task = this.store.upload(path, file);
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.photoId = url;
            if(imageName=='optional'){
              this.UploadURL(file.name,false);
            }
            else{
              this.UploadURL(imageName,true);
            }
            this.photoId = url;
            });
        }
        )
      ).subscribe();
    }
  }

  UploadURL(imageId : string , flag : boolean) {
    if(flag){
      this.collectionName = "portfolio-def" ;  
    }
    else{
      this.collectionName = "portfolio-opt" ;
    }
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection(this.collectionName).doc(imageId)
      .set({ 
        id : imageId,
        data: this.photoId
      })
    });
}

  getPhoto(){
    return this.firestore.collection('portfolio-def').valueChanges();
  }
  
  getOptPhoto(){
    return this.firestore.collection('portfolio-opt').valueChanges();
  }

  
}

