import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {Http} from "@angular/http";
import {ElasticsearchService} from "../elasticsearch.service";

@Component({
    selector: 'app-expanded-search',
    templateUrl: './expanded-search.component.html',
    styleUrls: ['./expanded-search.component.css']
})
export class ExpandedSearchComponent implements OnInit {

    term = new FormControl();
    items: Array<any>;
    aggregations: any;
    filters: any;
    total :'';

    constructor(public elastic: ElasticsearchService, private _route: ActivatedRoute, private _router: Router) {
        this.term.patchValue(this._route.snapshot.paramMap.get('query'));
        this.initFilters()
    }

    ngOnInit() {
        this.initSearch();
        this.term
            .valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(
                term => this.elastic.search(term,this.filters).subscribe(
                    // response => {this.items = response ; console.log(this.items[0])},
                    response => this.setResponse(response),
                    error => console.log(error)
                )
            );

    }

    private initSearch(){
        this.elastic.search(this.term.value, this.filters).subscribe(
            // response => {this.items = response ; console.log(this.items[0])},
            response => this.setResponse(response),
            error => console.log(error)
        );
    }

    private setResponse(response) {
        this.items = response.data.hits;
        this.total = response.data.total;
        this.aggregations = response.data.aggregations;
        console.log(response);
        // console.log(this.aggregations.type);
        //console.log(this.aggregations.modules);
        // console.log(this.aggregations.status);
    }

    public handleCardClick(type: string, id: number) {
        this._router.navigate([type, id])
    }

    private setFilters(filter_key,filter_value){
        if(filter_key == 'type'){
            this.filters[filter_key] = filter_value;
        }
        if(filter_key == 'modules'){
            if(this.filters[filter_key]){
                if(!this.filters[filter_key].includes(filter_value)){ // value not already in array a
                    this.filters[filter_key].push(filter_value);
                }

            }else {

                this.filters[filter_key] = [filter_value]; // init array
            }

        }



        //if()
        this.initSearch();
    }

    private initFilters(){
        this.filters = new Array();
        this.filters['type'] = 'all';
        this.initSearch();
    }

}
