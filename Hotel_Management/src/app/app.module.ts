import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppNavbarComponent } from './app-nav/app-navbar/app-navbar.component';
import { AdminComponent } from './admin/admin/admin.component';
import { OwnerComponent } from './owner/owner/owner.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { AdminsuccessComponent } from './admin/adminsuccess/adminsuccess.component';
import { OwnersuccessComponent } from './owner/owner/ownersuccess/ownersuccess.component';
import { UsersuccessComponent } from './user/user/usersuccess/usersuccess.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelListComponent1 } from './owner/hotel-list/hotel-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserHotellistComponent } from './user/user/user-hotellist/user-hotellist.component';
import { UserBookingComponent } from './user/user/user-booking/user-booking.component';
import { ForgetComponent } from './forget/forget.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AdminComponent,
    OwnerComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    AdminsuccessComponent,
    OwnersuccessComponent,
    UsersuccessComponent,
    HotelListComponent,
    HotelListComponent1,
    UserHotellistComponent,
    UserBookingComponent,
    ForgetComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
