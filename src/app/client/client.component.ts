import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  private id;
  private client;
  constructor(private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.id)
  }

}
