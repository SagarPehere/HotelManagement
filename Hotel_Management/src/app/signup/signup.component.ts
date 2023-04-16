import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { FormApiService } from '../services/form-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  hide = true;

  signUpForm!: FormGroup;

  labelPosition: 'female' | 'male' = 'male'

  patern1="^[7-9]{2}[0-9]{8}$"
  patern2="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,30}"


  constructor(private fb:FormBuilder,private formApi:FormApiService,private router:Router){}

  ngOnInit(){

    this.signUpForm = this.fb.group({
        firstName:['',[Validators.required, Validators.minLength(5)]],
        lastName:['',[Validators.required, Validators.minLength(5)]],
        email:['',[Validators.required, Validators.email]],
        mobileNo:['',[Validators.required,Validators.pattern(this.patern1)]],
        setUsername:['',[Validators.required,Validators.minLength(10),Validators.maxLength(20)]],
        setPassword:['',[Validators.required,Validators.pattern(this.patern2)]],
        confirmPassword:['',[Validators.required]]
    },{
      validators:this.passwordMatchingValidatior
    })
  }
  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('setPassword');
    const confirmPassword = control.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : { notmatched: true };
  };
    // setting up get request
    // onSubmitDetails(){
    //   // console.log(this.signUpForm);
    //   let formValues = this.signUpForm.value;
    //   this.formApi.addUsers(formValues).subscribe((userInfo: any)=>{
    //     console.log(userInfo);
    //   }, (err: any)=> { console.log(err);
    //   })
    //   this.signUpForm.reset();    
    // }
    onSubmit() {
      console.log(this.signUpForm.getRawValue());

    let formValues = this.signUpForm.value;
      this.formApi.addUsers(formValues).subscribe((userInfo: any)=>{
        console.log(userInfo);
      }, (err: any)=> { console.log(err);
      })
      this.signUpForm.reset(
        {
          firstName:'',
        lastName:'',
        email:'',
        mobileNo:'',
        setUsername:'',
        setPassword:'',
        confirmPassword:''
        }
      );
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
