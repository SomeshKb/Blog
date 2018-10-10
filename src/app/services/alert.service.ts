import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class AlertService {

  public messages:string[]=[];
  public alert: Subject<string> = new Subject<string>();

  constructor(){
    this.alert.subscribe(value=>{
      console.log(value);
        this.messages.push(value);
        setTimeout(() => {
          this.messages.pop();
      }, 4000);
    });
  }
    add(message: string) {
      console.log("value:"+message);

      this.alert.next(message);
    }
  
    listen() {
 
    }
}