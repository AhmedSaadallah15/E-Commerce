import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatch } from 'src/app/customValidathion/custom-validation';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


apiErrorMassage:string=''
isLoading:boolean = false

constructor(private _authService:AuthService ,private _router:Router){

}

registerForm : FormGroup = new FormGroup({
  name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)] ),
  phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
},{validators:passwordMatch})


register(form:FormGroup){

  console.log(form);
  if(form.valid){
   this.isLoading = true;
    this._authService.singUp(form.value).subscribe({
      next:(data) => {
      console.log(data);
        this._router.navigate(['/login']);

      },
      error:(err) => {
        this.isLoading = false;
        this.apiErrorMassage = err.error.message
        console.log(this.apiErrorMassage);
      }
    })

}}
}
