import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {ElasticsearchService} from "../elasticsearch.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term = new FormControl();
    items : Array<any>;
  filters: any;
  constructor( public elastic : ElasticsearchService , private _router : Router) { }

  ngOnInit() {
    this.filters = new Array();
    this.filters['type'] = 'all';
    this.term
        .valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(
            term => this.elastic.search(term,this.filters).subscribe(
                // response => {this.items = response ; console.log(this.items[0])},
                response => {this.items = response.data.hits  ; console.log(response)},
                error => console.log(error)
            )
        );
  }

  public clear(){
    this.items = [];
  }

  public handleCardClick(type : string, id:number){
    this.clear();
    this._router.navigate([type,id])
  }

  public handleKeyPress(term){
    let query = term._value ;
    this.items=[];
    this._router.navigate(['/expanded-search',query]);
  }

}
