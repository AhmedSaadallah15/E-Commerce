import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-change-user-data',
  templateUrl: './change-user-data.component.html',
  styleUrls: ['./change-user-data.component.css']
})
export class ChangeUserDataComponent {

  apiErrorMassage:string='';


  changeUserData :FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  })

  constructor(private _SettingService:SettingService ,private _ToastrService:ToastrService) { }

  handelForm(form:FormGroup){
this._SettingService.changeUserData(form.value).subscribe({
  next: (data) => {
    console.log(data);
    this._ToastrService.success('User data updated successfully','Succsesfully');
  },
  error: (error) => {
    console.log(error);
    this.apiErrorMassage = error.error.message;
  }
})

  }

}
