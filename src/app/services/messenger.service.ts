import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMSg(product) {
    this.subject.next(product) //Triggering an Event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
