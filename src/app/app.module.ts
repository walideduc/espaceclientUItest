import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { LieuxListComponent } from './lieux-list/lieux-list.component';
import { SelectedClientComponent } from './selected-client/selected-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDashboardComponent,
    ClientListComponent,
    LieuxListComponent,
    SelectedClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
