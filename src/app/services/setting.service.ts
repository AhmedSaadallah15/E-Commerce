import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from '../pages/settings/interfaces/change-password';
import { Observable } from 'rxjs';
import { UserData } from '../pages/settings/interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private _HttpClient:HttpClient) { }


  changePassword(form:ChangePassword):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',form)
  }


  changeUserData(form:UserData):Observable<any>{
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/',form)
  }

}
