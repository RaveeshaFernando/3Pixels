import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../Services/portfolio.service';
import { Portfolio } from '../../Models/portfolio.model';
import { Intro } from 'src/app/Models/intro.model';
import { IntroService } from 'src/app/Services/intro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isCollapsed = true;
  getDefault : Portfolio[];
  getOptional : Portfolio[];
  getIntro : Intro[];
  
  constructor(
    public portfolio : PortfolioService,
    public intro : IntroService
  ) { }

  ngOnInit(){
    this.portfolio.getPhoto().subscribe( imageList =>{
      this.getDefault = imageList as Portfolio[];
    });
    this.portfolio.getOptPhoto().subscribe( opList =>{
      this.getOptional = opList as Portfolio[];
    });
    this.intro.getVideo().subscribe( introVid =>{
      this.getIntro = introVid as Portfolio[];
    });
  }

}
