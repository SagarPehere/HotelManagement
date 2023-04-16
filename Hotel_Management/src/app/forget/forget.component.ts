import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormApiService } from '../services/form-api.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  otpMatch=false;
  random:any;
  otpUnmatch=false;
  data: any;
  cpass=true;

  @ViewChild('passForm') passForm!:NgForm

  constructor(private formApi: FormApiService, private router:Router) { }
  ngOnInit() {
  }

 async getRandomNumber(email:any) {
    this.formApi.getApiData=await this.formApi.getApi().toPromise();
    this.data=this.formApi.getApiData;
    this.data.forEach((element:any )=> {
      if (email.value==element.email) {
        console.log(element);
        this.random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        alert("Your OTP is :-"+this.random)
      }
      
    });
  
  }
  validation(otp:any){
if(this.random==otp.value){
this.otpMatch=true;
this.otpUnmatch=false;
}
else{
  this.otpUnmatch=true;
}
  }
  onSubmit(){
    
    if (this.formApi.signUpOwner) {
      this.router.navigateByUrl('/owner')
    }
    if (this.formApi.signUpUser) {
      this.router.navigateByUrl('/user')
    }
    if (this.formApi.signUpAdmin) {
      this.router.navigateByUrl('/admin')
    }
  }

}
