import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  apiErrorMassage:string=''
  isLoading:boolean = false

  constructor(private _authService:AuthService,private _router:Router){}

logInForm:FormGroup = new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password :new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
})

logIn(form:FormGroup){
if(form.valid){
  this.isLoading = true;
  this._authService.logIn(form.value).subscribe({
    next:(data) => {
      console.log(data);
      localStorage.setItem('userToken',data.token);
      this._authService.setUserToken()
      this._router.navigate(['/home']);
    },
    error:(err) => {
      this.isLoading = false
      this.apiErrorMassage = err.error.message;
      console.log(this.apiErrorMassage);
    }
  })
  }
}


}
