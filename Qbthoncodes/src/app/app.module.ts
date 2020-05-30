import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { EventsComponent } from './events/events.component';
import { EventdayadminComponent } from './eventdayadmin/eventdayadmin.component';
import { TriggermailsComponent } from './triggermails/triggermails.component';
import { ReportsComponent } from './reports/reports.component';
import { UserComponent } from './user/user.component';
import { SmeComponent } from './sme/sme.component';
import { EventsdayuserComponent } from './eventsdayuser/eventsdayuser.component';
import { UsernpminationComponent } from './usernpmination/usernpmination.component';
import { EventsdaysmeComponent } from './eventsdaysme/eventsdaysme.component';
import { PractisemcqComponent } from './practisemcq/practisemcq.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpageComponent,
    EventsComponent,
    EventdayadminComponent,
    TriggermailsComponent,
    ReportsComponent,
    UserComponent,
    SmeComponent,
    EventsdayuserComponent,
    UsernpminationComponent,
    EventsdaysmeComponent,
    PractisemcqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
