import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarndsService {

  constructor( private _HttpClient:HttpClient) { }


getAllBrands():Observable<any> {
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
}


getBrandDateils(id:string):Observable<any> {
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`);
}


}
