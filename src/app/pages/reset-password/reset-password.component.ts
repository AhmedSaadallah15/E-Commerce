import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {


  apiErrorMassage:string=''
  isLoading:boolean = false

  constructor(private _AuthService:AuthService , private _router:Router){}

  resetPassword:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    newPassword : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
  })


  handelResetPassword(form:FormGroup){
    this.isLoading = true;
    this._AuthService.resetPassword(form.value).subscribe({
      next: (data) => {
        this.isLoading = false;
        console.log(data);
        this._router.navigate(['/login']);
      },
      error: (error) => {
        this.isLoading = false;
        this.apiErrorMassage = error.error.message;
      }
    })

  }

}
