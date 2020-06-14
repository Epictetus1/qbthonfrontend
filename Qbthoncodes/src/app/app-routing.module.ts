import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'
import {AdminpageComponent} from '../app/adminpage/adminpage.component';
import {EventsComponent} from '../app/events/events.component';
import {EventdayadminComponent} from '../app/eventdayadmin/eventdayadmin.component';
import {UserComponent} from '../app/user/user.component';
import {SmeComponent} from '../app/sme/sme.component';
import {EventsdayuserComponent} from '../app/eventsdayuser/eventsdayuser.component';
import {UsernpminationComponent} from '../app/usernpmination/usernpmination.component';
import {PractisemcqComponent} from '../app/practisemcq/practisemcq.component';
import{EventsdaysmeComponent} from '../app/eventsdaysme/eventsdaysme.component';
import {ReportsComponent} from '../app/reports/reports.component';
import { EventsInfoComponent } from './user/events-info/events-info.component';
import {DisplaypractisequestionsComponent} from '../app/displaypractisequestions/displaypractisequestions.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{path: '', component: LoginComponent},{ path: 'admin', component: AdminpageComponent },
{ path: 'eventsAdmin' , component:EventsComponent},
{path: 'EventsdayAdmin' , component:EventdayadminComponent},
{path:'EventsdaySme', component:EventsdaysmeComponent},
{path: 'user' , component:UserComponent},
{path:'sme', component:SmeComponent},
{path: 'EventsdayUser' ,component:EventsdayuserComponent},
{path: 'practiseMCQ', component:PractisemcqComponent},
{path: 'eventsInfo', component:EventsInfoComponent},
{path: 'nominate', component:UsernpminationComponent},
{path: 'displaypractiseMcq', component:DisplaypractisequestionsComponent},
{path: 'getreports',component:ReportsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
