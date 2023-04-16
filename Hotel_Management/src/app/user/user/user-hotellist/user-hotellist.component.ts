import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormApiService } from 'src/app/services/form-api.service';

@Component({
  selector: 'app-user-hotellist',
  templateUrl: './user-hotellist.component.html',
  styleUrls: ['./user-hotellist.component.css']
})
export class UserHotellistComponent {
  apiData: any;

  searchText:any;

  constructor(private formApi:FormApiService,private router:Router){}
ngOnInit(){
  this.formApi.getHotellist().subscribe((data)=>{
    this.apiData=data
    console.log(data);
    })
}

bookRoom(){
  prompt('Are You sure you want to book this Hotel');
this.router.navigateByUrl('/userBooking');
}
back(){
  
  return this.router.navigateByUrl('/userSuccess');

}
}
