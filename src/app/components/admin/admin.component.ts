import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../../Services/authentication.service';
import { PortfolioService } from '../../Services/portfolio.service';
import { Portfolio } from 'src/app/Models/portfolio.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public isCollapsed = false;
  getDefault : Portfolio[] ;

  constructor(
    public authService : AuthenticationService,
    public portfolio : PortfolioService,
    public config: NgbTabsetConfig
    ){
    config.justify = 'center';
    // config.type = 'pills';
   }

  ngOnInit(){
    this.portfolio.getPhoto().subscribe( imageList =>{
        this.getDefault = imageList as Portfolio[];
        console.log(this.getDefault);
      });
    }
}
