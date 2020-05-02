import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Intro } from '../Models/intro.model';

@Injectable({
  providedIn: 'root'
})
export class IntroService {
  downloadURL: Observable<string>;
  videoId  : string ;
  photo : any ;
  defaultPhotolist : any ;

  constructor(
    public store: AngularFireStorage, 
    public firestore: AngularFirestore,
  ) { }

  uploadIntro(event : any) {
    let file = event.target.files[0];
    let path = `intro/introVid`;
    let ref = this.store.ref(path);
    let task = this.store.upload(path, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = ref.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.videoId = url;
          this.UploadURL();
          this.videoId = url;
          });
      }
      )
    ).subscribe();
  }

  UploadURL() {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("video").doc('introVid')
      .set({ 
        id : 'introVid',
        data: this.videoId})
        });
  }

  getVideo(){
    return this.firestore.collection('video').valueChanges();
  }
}
