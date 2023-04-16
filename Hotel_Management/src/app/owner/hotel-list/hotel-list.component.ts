import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormApiService } from 'src/app/services/form-api.service';
import { Food, Room } from './hotel';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent1 {
  regitrationForm!:FormGroup;
  dataId:any;
  editData:any;
  editIdArray:any=[];
  isNewRegistration=false;
  
    constructor(private fb:FormBuilder, private formApi : FormApiService,private route : Router  ) { }
  
    ngOnInit(): void {
      console.log('hoteldetails');
    
      this.dataId = this.formApi.hotelId;
      this.editData = this.formApi.getApiData;
      console.log('data.......', this.editData);
     // console.log('data..>>>',this.editData.userName);
      this. formData()
      this.isNewRegistration=this.formApi.isNewRegistration
    }
    
  
  
    formData(){
      this.regitrationForm = this.fb.group({
        userName:[ this.editData ? this.editData.userName : '',[Validators.required,Validators.maxLength(40)]],
        hotelName:[ this.editData ? this.editData.hotelName :'',[Validators.required,]],
        hotelAddress: [this.editData ? this.editData.hotelAddress :'',[Validators.required]],
        hotelContact:[ this.editData ? this.editData.hotelContact :'',[Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]{10}')]],
        hotelMenu:[ this.editData ? this.editData.hotelMenu :'',[Validators.required]],
        roomsAvailable:[ this.editData ? this.editData.roomAvailable :'',Validators.required],
        owenrCheck:[ this.editData ? this.editData.owenrCheck :'',[Validators.requiredTrue]],
        userPass:[ this.editData ? this.editData.userPass :'',[Validators.required, Validators.maxLength(8)]],
  
      });
    }
  
  
    onSubmit(){
      if (this.isNewRegistration) {
        this.formApi.postHotelCall( this.regitrationForm.value).subscribe((res) => {
          console.log(res);
        })
      }
      else {
        this.formApi.patchHotelCall( this.regitrationForm.value).subscribe((res) => {
          console.log(res);
        })
      
      }
      alert('data updated succesfully')
      this.route.navigateByUrl('/owner')
    }
    back(){
      this.route.navigateByUrl('/ownerSuccess')
    }

    rooms: Room[] = [
      { roomNo: 'Room No:-101'},
      { roomNo: 'Room No:-102'},
      { roomNo: 'Room No:-103'},
      { roomNo: 'Room No:-104'},
      { roomNo: 'Room No:-201'},
      { roomNo: 'Room No:-202'},
      { roomNo: 'Room No:-203'},
    ];
    foods: Food[] = [
      {menuList: 'Hotel Sagar Special'},
      { menuList: 'Paneer Tadka'},
      { menuList: 'Veg Kadai'},
      { menuList: 'Kaju Masala'},
      { menuList: 'Mashroom'},
      { menuList: 'Dum Biryani'},
      { menuList: 'Matan Handi'},
      { menuList: 'Chicken Handi'},
      { menuList: 'Fish Fry'},
    ];
  
}
