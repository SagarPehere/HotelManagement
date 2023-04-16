import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormApiService } from 'src/app/services/form-api.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.css']
})
export class OwnersuccessComponent {
  apiData: any;
  flag = false;
  refreshHotelList: any = [];
  isNewRegistration = false;
  username: any;

  constructor(private router: Router, private formApi: FormApiService) { }

  ngOnInit() {
    // this.formApi.getHotellist().subscribe((data)=>{
    //   this.apiData=data
    //   console.log(data);
    //   })
    this.getHotelDetails()
  }
  getHotelDetails() {
    this.apiData = this.formApi.hotelListbyOwner;

    this.flag = true

  }
  newRegistration() {
    this.router.navigateByUrl('/hotel-list');
    this.isNewRegistration = true;
    this.formApi.isNewRegistration = this.isNewRegistration;
  }
  getData() {
    this.formApi.getHotellist().subscribe((data) => {
      this.apiData.data
      console.log(data);
    })
  }
  async editData(id: any) {
    this.formApi.hotelId = id;
    this.formApi.getApiData = await this.formApi.getHotelCallById(id).toPromise()
    this.router.navigateByUrl('/hotel-list')
  }
  async deleteData(id: any) {
    this.formApi.deleteDatabyOwner = await this.formApi.deleteApi(id).toPromise();
    this.refreshHotellist(id);
  }
  refreshHotellist(id: any) {
    this.apiData.forEach((ele: any) => {
      if (ele.id != id) {
        this.refreshHotelList.push(ele)
      }
    })
    this.apiData = [...this.refreshHotelList];
    this.refreshHotelList = [];
  }
  back() {
    return this.router.navigateByUrl('/owner');
  }

}
