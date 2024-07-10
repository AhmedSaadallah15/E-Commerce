import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingService } from 'src/app/services/setting.service';
import { passwordMatch } from 'src/app/customValidathion/custom-validation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  apiErrorMassage:string ='';
  changePassword :FormGroup = new FormGroup({
    currentPassword: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
  },{validators:passwordMatch})

  constructor(private _SettingService:SettingService, private _ToastrService:ToastrService) { }

  handelForm(form:FormGroup){
    this._SettingService.changePassword(form.value).subscribe({
      next: (data) => {
        console.log(data);
        this._ToastrService.success('User data updated successfully','Succsesfully');

      },
      error: (error) => {
        console.log(error);
        this.apiErrorMassage = error.error.message
      }
     });
    }
    }






