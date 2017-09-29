import { Injectable } from '@angular/core';
import {Http, Response , URLSearchParams , Headers ,RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {environment} from "../environments/environment";

@Injectable()
export class ElasticsearchService {

  constructor(private http :Http ,private authenticationService : AuthenticationService) { }

  public search(query :string , filters = ''){

      let headers = this.authenticationService.getBaseHeaders();

      let params : URLSearchParams = new URLSearchParams();
      params.set('query',query);
      if(filters){ //[type: "client", profile: "collaborator", modules: 1, status: "active"]
          // console.log('##################################################');
          // console.log(query);
          console.log(filters);
          // console.log('##################################################');

          if(filters['type']){
              params.set('filters[type]',filters['type'])
          }

          if(filters['modules']){
              // console.log(filters['modules']);
              // for (params.set('filters[modules]',filters['modules'])){
              //     params.set('filters[modules]',filters['modules'])
              // }
              let i = 0 ;
              filters['modules'].forEach(function(element) {
                  let key_string_array = 'filters[modules]['+i+']';
                  console.log(key_string_array);
                  params.set(key_string_array,element);
                  i++;
              });

          }
      }

      console.log(params.getAll('filters'));

      let options = new RequestOptions({headers:headers,search : params});



      // return this.http.get('http://local.api.client.recyclage.veolia.fr/api/v1/search',{ search : params})
      return this.http.get(environment.search_url,options)
          .map((response : Response) => response.json())
          .catch(this.handleError)  ;
  }

  private handleError(err : Response){
      console.log(err);
    let msg = `Status code ${err.status} on url ${err.url}`;
      console.error(msg);
      return Observable.throw(msg);
  }

}
