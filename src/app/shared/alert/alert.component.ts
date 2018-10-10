import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';


@Component({
    selector: 'app-alert',
    template: `<span class="alert" *ngIf='alert!==""'>
                {{alert}}
                </span>` ,
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

    constructor(private alertService: AlertService) { 
        this.alertService.alert.subscribe(value => {
            this.alert=value;
        });
    }

    ngOnInit() {
   
    }
  }