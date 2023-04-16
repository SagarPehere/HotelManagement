import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.css']
})
export class AdminsuccessComponent {

  constructor(private router:Router){}

  getHotels(){
  
    return this.router.navigateByUrl('/hotellist');

  }
  back(){
    this.router.navigateByUrl('/admin')
  }

}
