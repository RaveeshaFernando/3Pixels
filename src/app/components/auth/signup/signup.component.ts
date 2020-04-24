import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Services/authentication.service';
import { NgForm, Form } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public authService : AuthenticationService, 
    private firestore: AngularFirestore,) { }

  ngOnInit(): void {
  }

  onSubmit (form : NgForm){
    const data :  form.value ;
    this.firestore.collection('Contact').add(data);
  }
}
