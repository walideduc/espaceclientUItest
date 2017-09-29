import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { LieuxListComponent } from './lieux-list/lieux-list.component';
import { SelectedClientComponent } from './selected-client/selected-client.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {LoginWithImplicitComponent} from "./login-with-implicit/login-with-implicit.component";
import {CallbackComponent} from "./callback/callback.component";
import {ErrorComponent} from "./error/error.component";
import {UserComponent} from "./user/user.component";
import {ClientComponent} from "./client/client.component";
import {ExpandedSearchComponent} from "./expanded-search/expanded-search.component";

const routes : Routes = [
    {path:'',pathMatch:'full',redirectTo:'clients'},
    {path:'clients',component:ClientDashboardComponent ,canActivate:[AuthGuard]},
    {path:'users',component:UserDashboardComponent , canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'login-with-implicit',component:LoginWithImplicitComponent},
    {path:'callback',component:CallbackComponent},
    {path:'error/:code',component:ErrorComponent},
    {path:'user/:id',component:UserComponent},
    {path:'client/:id',component:ClientComponent},
    {path:'expanded-search/:query',component:ExpandedSearchComponent},
    // {path:'**',component:UserListComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}

export const routableComponents = [
    ClientDashboardComponent,
    UserDashboardComponent,
    ClientListComponent,
    LieuxListComponent,
    SelectedClientComponent,
    LoginComponent,
    LoginWithImplicitComponent,
    CallbackComponent,
    UserComponent,
    ClientComponent,
    ExpandedSearchComponent,

];





