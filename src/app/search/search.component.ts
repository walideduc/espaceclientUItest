import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {ElasticsearchService} from "../elasticsearch.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term = new FormControl();
    items : Array<any>;
  constructor( public elastic : ElasticsearchService) { }

  ngOnInit() {
    this.term
        .valueChanges.debounceTime(400)
        .distinctUntilChanged()
        .subscribe(
            term => this.elastic.serach(term).subscribe(
                response => {this.items = response ; console.log(this.items[0])}
            )
        );
  }

}
