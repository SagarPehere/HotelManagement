import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent {

  thanks="Thank You So Much for Selecting Our Hotel."
  instructions="Please Filled Below Details to Complete Your Booking"

  constructor(private router:Router){}

  back(){
    return this.router.navigateByUrl('/userhotellist');
  }
  onSubmit(){
    alert('Your Room Booked Successfully')
  }
}
