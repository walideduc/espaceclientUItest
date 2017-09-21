import { Injectable } from '@angular/core';
import {Http, Response , URLSearchParams , Headers ,RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class ElasticsearchService {

  constructor(private http :Http ,private authenticationService : AuthenticationService) { }

  public search(query :string){
      let currentUser = this.authenticationService.getCurrentUser();
      let token = currentUser.token ;
      console.log(token)
      let headers = new Headers();
      headers.append('Accept','application/json');
      headers.append('Authorization','Bearer '+token);

      let params : URLSearchParams = new URLSearchParams();
      params.set('query',query);

      let options = new RequestOptions({headers:headers,search : params});

      console.log(query);

      // return this.http.get('http://local.api.client.recyclage.veolia.fr/api/v1/search',{ search : params})
      return this.http.get('http://local.api.client.recyclage.veolia.fr/api/v1/search',options)
          .map((response : Response) => response.json().data)
          .catch(this.handleError)  ;
  }

  private handleError(err : Response){
      console.log(err);
    let msg = `Status code ${err.status} on url ${err.url}`;
      console.error(msg);
      return Observable.throw(msg);
  }

}
