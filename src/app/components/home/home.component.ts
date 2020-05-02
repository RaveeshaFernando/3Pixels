import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../Services/portfolio.service';
import { Portfolio } from '../../Models/portfolio.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isCollapsed = true;
  getDefault : Portfolio[];
  constructor(
    public portfolio : PortfolioService,
  ) { }

  ngOnInit(){
    this.portfolio.getPhoto().subscribe( imageList =>{
      this.getDefault = imageList as Portfolio[];
    });
  }

}
