import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Client} from "../client";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  @Input() clients : Client[];
  @Output() clientChanged : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleClientClick(client : Client){
    console.log(client.name);
    this.clientChanged.emit(client);
  }

}
