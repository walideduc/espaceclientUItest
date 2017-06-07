import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { LieuxListComponent } from './lieux-list/lieux-list.component';
import { SelectedClientComponent } from './selected-client/selected-client.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'


const routes : Routes = [
    {path:'',pathMatch:'full',redirectTo:'clients'},
    {path:'clients',component:ClientDashboardComponent},
    {path:'users',component:UserDashboardComponent},
    // {path:'users/:id',component:UserListComponent},
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
    SelectedClientComponent
];





