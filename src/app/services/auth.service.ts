import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserSginin } from '../interfaces/user-sginin';
import { ForgetPassword } from '../interfaces/forget-password';
import { VerifyCode } from '../interfaces/verify-code';
import { ResetPassword } from '../interfaces/reset-password';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

userToken:BehaviorSubject <string> = new BehaviorSubject('')

  constructor(private _httpClient:HttpClient,private _router:Router) {
    if(localStorage.getItem('userToken')){
      this.userToken.next(JSON.stringify(localStorage.getItem('userToken')));
    }
  }

setUserToken(){
  let token = JSON.stringify(localStorage.getItem('userToken'));
  this.userToken.next(token);
}


singUp(info:User) :Observable<any>{
 return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',info)
}




logIn(info:UserSginin) :Observable<any>{
  return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',info)
 }


logOut(){
  localStorage.removeItem('userToken');
  this.userToken.next('');
  this._router.navigate(['/login']);
}

forgetPassword(info:ForgetPassword) :Observable<any>{
  return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',info)
 }

 verifyCode(form:VerifyCode) :Observable<any>{
  return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',form)
 }

 resetPassword(form:ResetPassword) :Observable<any>{
  return this._httpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',form)
 }

}

