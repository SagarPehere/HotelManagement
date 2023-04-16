import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormApiService } from 'src/app/services/form-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @ViewChild('signin') signinForm!: NgForm
  loginData: any;
  getApiResponse: any;
  signUpUser=false;
  
  constructor(private formApi:FormApiService, private router:Router){}

  async onSubmitSignin() {
    console.log(this.signinForm.value)
    this.loginData = this.signinForm.value
    this.getApiResponse = await this.formApi.getApi().toPromise();
    this.getApiResponse.forEach((element: any) => {
      if (this.loginData.userName == element.setUsername && this.loginData.password == element.setPassword) {
        this.router.navigateByUrl('/userSuccess');
        this.formApi.isUserloggedin=true;
      }
    });
  }
  signUp(){
    this.router.navigateByUrl('/signup')
this.formApi.signUpUser= this.signUpUser=true;
  }
  forgetpassword(){
    this.router.navigateByUrl('/forgetpassword');
    this.formApi.signUpUser= this.signUpUser=true;
  }

}
