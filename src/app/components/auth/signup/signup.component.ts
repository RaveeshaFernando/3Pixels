import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


import { AuthenticationService } from '../../../Services/authentication.service';

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

}
