import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs";

@Injectable()
export class MessageService {
  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message : string){
    this.subject.next({text : message });
  }

  clearMessage(){
    this.subject.next();
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }

}
