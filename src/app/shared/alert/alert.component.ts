import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { timeout } from 'q';


@Component({
    selector: 'app-alert',
    templateUrl:'./alert.component.html',
    styles : [`span {
        padding: 5px 25px;
        margin: auto 25px;
        background: #ff6661;
        color: rgb(255,255, 255);
        font-size: 25px;
        border-radius: 5px;
    }`]

})

export class AlertComponent implements  OnInit{

    alert:string="";
    messages:string[];
    constructor(private alertService: AlertService) { 
      this.messages=alertService.messages;
    }

    ngOnInit() {
   
    }
  }