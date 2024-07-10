import { Component } from '@angular/core';
import { FormGroup, Validators ,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {



  isLoading:boolean = false;
  apiErrorMassage:string = ''

constructor(private _AuthService:AuthService,private _Router:Router){

}
  verifyCode:FormGroup= new FormGroup({
    resetCode: new FormControl(null,[ Validators.required])


  })

handelVerifyCode(form:FormGroup){
console.log(form.value);
this.isLoading = true;
  this._AuthService.verifyCode(form.value).subscribe({
    next: (data) => {
      this.isLoading = false;
      console.log(data);
      this._Router.navigate(['/reset-password']);
    },
    error: (err) => {
      this.isLoading = false;
      console.log(err);
      this.apiErrorMassage = err.error.message
    }
  })


}

}
