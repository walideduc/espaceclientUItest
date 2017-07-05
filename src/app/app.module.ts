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


@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    SearchComponent,
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
