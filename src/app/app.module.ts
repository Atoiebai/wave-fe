import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import {FormsModule} from "@angular/forms";
import { DisplayUsersComponent } from './components/users/display-users/display-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DisplayUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
