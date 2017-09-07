import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login-with-implicit',
  templateUrl: './login-with-implicit.component.html',
  styleUrls: ['./login-with-implicit.component.css']
})
export class LoginWithImplicitComponent implements OnInit {

  public implicit_url;
  public client_id;
  public login_with_google_url;

  constructor() {
      let callback_url = environment.spa_callback_url;
      this.client_id = environment.client_id;
      let authorisation_server_url = environment.authorisation_server_url;
      this.implicit_url =authorisation_server_url+'?client_id='+this.client_id+'&redirect_uri='+callback_url+'&response_type=token'
      this.login_with_google_url = environment.login_with_google_url+'?client_id='+this.client_id;
      console.log(this.implicit_url);
      console.log(this.login_with_google_url);
      console.log(callback_url);
  }

    ngOnInit() {}


  // loginWithImplicit(){
  //   this.authenticationService.loginWithImplicit();
  // }






}
