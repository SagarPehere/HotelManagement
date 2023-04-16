import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormApiService } from 'src/app/services/form-api.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {

  @ViewChild('signin') signinForm!: NgForm
  loginData: any;
  getApiResponse: any;
  hotellist: any;
  hotelListbyOwner:any= [];
  signUpOwner=false;

  constructor(private formApi: FormApiService, private router: Router) { }

  ngOnInit(){
    this.formApi.getHotellist().subscribe((respo)=>{
      this.hotellist=respo;
    })
  }

  async onSubmitSignin() {
    this.loginData = this.signinForm.value
    this.getApiResponse = await this.formApi.getApi().toPromise();
    this.getApiResponse.find((data: any) => {
    return  this.loginData.userName == data.setUsername && this.loginData.password == data.setPassword
    })

    this.hotellist.forEach((element:any) => {
      if(this.loginData.userName == element.userName){
        this.hotelListbyOwner.push(element);
      }
    });

      this.formApi.hotelListbyOwner=this.hotelListbyOwner;
    if(this.hotelListbyOwner){
this.router.navigateByUrl('/ownerSuccess');
    }
      
  }
  signUp(){
    this.router.navigateByUrl('/signup')
this.formApi.signUpOwner= this.signUpOwner=true;
  }
  forgetpassword(){
    this.router.navigateByUrl('/forgetpassword');
    this.formApi.signUpOwner= this.signUpOwner=true;
  }
}
