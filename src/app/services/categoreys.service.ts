import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoreysService {

  constructor(private _HttpClient:HttpClient) { }





  getAllCategorys():Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  getAllCategoryDateils(id:string):Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`);
  }


}
