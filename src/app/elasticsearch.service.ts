import { Injectable } from '@angular/core';
import {Http, Response , URLSearchParams} from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs";

@Injectable()
export class ElasticsearchService {

  constructor(private http :Http) { }

  public serach(query :string){
      console.log(query);
      let params : URLSearchParams = new URLSearchParams();
      params.set('query',query);
      return this.http.get('http://local.api.client.recyclage.veolia.fr/api/search',{ search : params})
          .map((response : Response) => response.json().data)
          .catch(this.handleError)  ;
  }

  private handleError(err : Response){
    let msg = `Status code ${err.status} on url ${err.url}`;
      console.error(msg);
      return Observable.throw(msg);
  }

}
