import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms'
import {ElasticsearchService} from "./elasticsearch.service";
import {MessageService} from "./message.service";
import {AuthGuard} from "./auth.guard";

import { FormsModule }   from '@angular/forms';
import {AuthenticationService} from "./authentication.service";
import { ErrorComponent } from './error/error.component';
import { ExpandedSearchComponent } from './expanded-search/expanded-search.component';


@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    SearchComponent,
    ErrorComponent,
    ExpandedSearchComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ElasticsearchService,MessageService, AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
