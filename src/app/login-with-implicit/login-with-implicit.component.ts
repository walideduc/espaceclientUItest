import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-with-implicit',
  templateUrl: './login-with-implicit.component.html',
  styleUrls: ['./login-with-implicit.component.css']
})
export class LoginWithImplicitComponent implements OnInit {

  public implicit_url;
  public client_id = 4;

  constructor() {
      let root_url = 'http://local.ui.client.recyclage.veolia.fr/';
      let authrisation_server_url  = 'http://local.api.client.recyclage.veolia.fr/oauth/authorize';
      let implicit_url =authrisation_server_url+'?client_id='+this.client_id+'&redirect_uri='+root_url+'callback&response_type=token'
      this.implicit_url = implicit_url;
  }

    ngOnInit() {}


  // loginWithImplicit(){
  //   this.authenticationService.loginWithImplicit();
  // }






}
