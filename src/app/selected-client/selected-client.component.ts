import {Component, OnInit, Input} from '@angular/core';
import {Client} from "../client";

@Component({
  selector: 'app-selected-client',
  templateUrl: './selected-client.component.html',
  styleUrls: ['./selected-client.component.css']
})
export class SelectedClientComponent implements OnInit {

  @Input() client: Client;
  constructor() { }

  ngOnInit() {
  }

}
