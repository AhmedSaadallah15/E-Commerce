import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  isLoading:boolean = false;
  apiErrorMassage:string = ''

constructor(private _AuthService:AuthService,private _Router:Router){

}



forgetPassword:FormGroup = new FormGroup({
  email : new FormControl(null,[Validators.required , Validators.email])
})

forgetPasswordForm(form:FormGroup){

  console.log(form);


  this.isLoading = true;



this._AuthService.forgetPassword(form.value).subscribe({
  next:(data) => {
    console.log(data);
    this.isLoading = false;
    this._Router.navigate(['/verify-code']);
  },
  error:(error) => {
    this.isLoading = false;
    this.apiErrorMassage = error.error.message;
  }
})
}
}
