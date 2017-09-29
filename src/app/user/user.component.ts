import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private id;
  private user;
  constructor(private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.id)
  }
}
