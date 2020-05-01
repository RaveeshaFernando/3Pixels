import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Services/authentication.service';
import { GetUserService } from '../../../Services/get-user.service';
import { UserModel } from '../../../Models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( 
    public authService : AuthenticationService,
    public loggedUser : GetUserService,
    public firebase : AngularFirestore
    ){}

  ngOnInit(): void {
  }

  
}
