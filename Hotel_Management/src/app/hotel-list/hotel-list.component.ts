import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormApiService } from '../services/form-api.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  apiData: any;
  username: any;

  constructor(private formApi:FormApiService , private router:Router){}
ngOnInit(){
  this.formApi.getHotellist().subscribe((data)=>{
    this.apiData=data
    console.log(data);
    })
}

// async deleteData(id:any){
//   this.apiData= await this.formApi.deleteApi(id).toPromise()
// }

deleteData(id:any){
  this.formApi.deleteApi(id).subscribe((data)=>{
    this.formApi.getHotellist().subscribe((data)=>{
      this.apiData=data
      console.log(data);
      })
    
  })
}
back(){
  this.router.navigateByUrl('/adminSuccess')
}
submit(name:any){
  this.username=name.value;
  this.formApi.subject=name.value;
}

}
