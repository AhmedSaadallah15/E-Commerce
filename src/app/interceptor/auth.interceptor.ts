import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _loader:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
this._loader.setLoading(true);

   let myReq = request.clone({
      headers:request.headers.set('token',`${localStorage.getItem('userToken')}`)
    })

    return next.handle(myReq).pipe(
      finalize(() => { this._loader.setLoading(false);}))















}}
