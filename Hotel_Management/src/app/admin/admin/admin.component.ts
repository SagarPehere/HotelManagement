import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormApiService } from 'src/app/services/form-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  @ViewChild('signin') signinForm!: NgForm;
  getApiResponse: any;
  loginData: any;
  signUpAdmin=false;


  constructor(private formApi: FormApiService, private router: Router) { }

  async onSubmitSignin() {
    console.log(this.signinForm.value)
    this.loginData = this.signinForm.value
    this.getApiResponse = await this.formApi.getApi().toPromise();
    this.getApiResponse.forEach((element: any) => {
      if (this.loginData.userName == element.setUsername && this.loginData.password == element.setPassword) {
        this.router.navigateByUrl('/adminSuccess');
      }
    });
    
  }
  signUp(){
    this.router.navigateByUrl('/signup')
this.formApi.signUpAdmin= this.signUpAdmin=true;
  }
  forgetpassword(){
    this.router.navigateByUrl('/forgetpassword');
    this.formApi.signUpAdmin= this.signUpAdmin=true;
  }



}
