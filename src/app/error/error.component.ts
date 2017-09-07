import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public code;
  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('code'))
    this.code = this._route.snapshot.paramMap.get('code');
  }

  ngOnInit() {
  }

}
