import {Component, ViewChild, OnDestroy} from '@angular/core';
import {SearchComponent} from "./search/search.component";
import {MessageService} from "./message.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  message: any;
  subscription : Subscription;
  title = 'app works!';

  @ViewChild(SearchComponent) search : SearchComponent;

  constructor(private messageService :MessageService){
    // // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(
        message => { this.message = message}
    );
  }

  public body_clic(){
    console.log('click');
    this.search.clear();
  }


  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}


