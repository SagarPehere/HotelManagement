import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.css']
})
export class UsersuccessComponent {

  // bg="assets/images/bg1.jpg"

  constructor(private router: Router){

  }

  getHotels(){
  
    return this.router.navigateByUrl('/userhotellist');

  }
  back(){
  
    return this.router.navigateByUrl('/user');

  }


}
