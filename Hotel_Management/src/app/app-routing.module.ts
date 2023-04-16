import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminsuccessComponent } from './admin/adminsuccess/adminsuccess.component';
import { ForgetComponent } from './forget/forget.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { LoginGuard } from './login.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { HotelListComponent1 } from './owner/hotel-list/hotel-list.component';
import { OwnerComponent } from './owner/owner/owner.component';
import { OwnersuccessComponent } from './owner/owner/ownersuccess/ownersuccess.component';
import { SignupComponent } from './signup/signup.component';
import { UserBookingComponent } from './user/user/user-booking/user-booking.component';
import { UserHotellistComponent } from './user/user/user-hotellist/user-hotellist.component';
import { UserComponent } from './user/user/user.component';
import { UsersuccessComponent } from './user/user/usersuccess/usersuccess.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'user', component: UserComponent },
  {path:'forgetpassword', component:ForgetComponent},
  { path: 'adminSuccess', component: AdminsuccessComponent },
  { path: 'hotellist', component: HotelListComponent },
  { path: 'userSuccess', component: UsersuccessComponent },
  { path: 'userhotellist', component: UserHotellistComponent },
  {path:'userBooking', component:UserBookingComponent},
  { path: 'ownerSuccess', component: OwnersuccessComponent },
  { path: 'hotel-list', component: HotelListComponent1 },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
