import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor( private _authenticationService: AuthenticationService, private _route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
    this._route.fragment.subscribe((fragment: string) => {
      let keyValue = fragment.split('&');
      let access_token_key_value = keyValue[0].split('=');
      let access_token = access_token_key_value[1];
      this._authenticationService.setToken(access_token);
      this._router.navigate(['/'])

    })
  }

}
