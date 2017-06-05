import { Component, OnInit } from '@angular/core';
import {Client} from "../client";
import {Lieu} from "../lieu";

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  clients : Client[];
  selectedClient : Client;
  lieuxSelectedClient ;
  constructor() { }

  ngOnInit() {
    this.clients = [
      new Client(1,'client1','siret1'),
      new Client(2 , 'client2', 'siret2'),
      new Client(3 , 'client3', 'siret3')
    ];
    this.selectedClient = this.clients[0];
  }

  handleClientChanged(client){
    this.selectedClient = client;
    this.getLieuxOfSelectedClient(client);
    console.log(client);

  }

  getLieuxOfSelectedClient(client : Client){
    // LieuService will be used here.
    var clientLieux = {
      client1 : [
        new Lieu(11,'lieu'),
        new Lieu(12,'lieu'),
      ],
      client2 : [
        new Lieu(21,'lieu'),
        new Lieu(22,'lieu'),
        new Lieu(23,'lieu'),
      ],
      client3 : [
        new Lieu(31,'lieu'),
        new Lieu(32,'lieu'),
        new Lieu(33,'lieu'),
      ],
    };
    this.lieuxSelectedClient = clientLieux[client.name];
  }

}
