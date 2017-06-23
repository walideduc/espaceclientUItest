import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class UserService {

  constructor(private http : Http , private authenticationService: AuthenticationService) { }

  getConnectedUser() {

  }

}
