import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class AlertService {

    public alert: Subject<string> = new Subject<string>();


    add(message: string) {
      this.alert.next(message);
    }
  
    clear() {
        console.log("clear");

      this.alert.next("");
    }
}