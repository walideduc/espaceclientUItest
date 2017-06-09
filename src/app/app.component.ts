import {Component, ViewChild} from '@angular/core';
import {SearchComponent} from "./search/search.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  @ViewChild(SearchComponent) search : SearchComponent;

  public body_clic(){
    console.log('click');
    this.search.clear();
  }
}


