import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '../../Services/authentication.service';
import { PortfolioService } from '../../Services/portfolio.service';
import { IntroService } from '../../Services/intro.service';

import { Portfolio } from 'src/app/Models/portfolio.model';
import { Intro } from 'src/app/Models/intro.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public isCollapsed1 = false;
  public isCollapsed2 = false;
  
  getDefault : Portfolio[] ;
  getOptional : Portfolio[] ;
  getIntroVid : Intro[] ;
  newimage=null;
  newVideo=null;
  selected=null;

  constructor(
    public authService : AuthenticationService,
    public portfolio : PortfolioService,
    public intro : IntroService,
    public config: NgbTabsetConfig
    ){
    //config.justify = 'center';
    config.type = 'pills';
   }
   
  ngOnInit(){
    this.portfolio.getPhoto().subscribe( imageList =>{
      this.getDefault = imageList as Portfolio[];
    });

    this.portfolio.getOptPhoto().subscribe( opList =>{
      this.getOptional = opList as Portfolio[];
    });

    this.intro.getVideo().subscribe( introUp =>{
      this.getIntroVid = introUp as Intro[];
    });
  }

  selectImage(image: any){this.selected=image;}
  newImage(image: any){this.newimage=image;}
  newIntro(video: any){ this.newVideo=video;}

  submitVideo(){this.intro.uploadIntro(this.newVideo);}
  submit(flag : boolean){
    if(flag){
      this.portfolio.uploadImage(this.newimage,this.selected);
    }
    else{
      this.portfolio.uploadImage(this.newimage,'optional');
    }
  }
  playVid(){
    var vid: any = document.getElementById("videoIntro");
    vid.play();
  }
  pauseVid(){
    var vid: any = document.getElementById("videoIntro");
    vid.pause();
  }
}
