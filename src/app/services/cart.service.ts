import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShippingAddress } from '../interfaces/shipping-address';

@Injectable({
  providedIn: 'root'
})
export class CartService {

// header:any={
//   token :localStorage.getItem('userToken')
// }

numOfCartItems:BehaviorSubject<number> =new BehaviorSubject(0)

  constructor(private _HttpClient:HttpClient) {

    this.getCart().subscribe({
      next: (data) => {
        console.log(data);
        this.numOfCartItems.next(data.numOfCartItems)
        console.log(this.numOfCartItems);


      },
      error: (error) => {
        console.log(error);
      }
    })
  }


  addToCart(productId:string):Observable<any>{

return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{
  productId : productId
})
  }
  getCart():Observable<any>{

    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart')
      }

  removeCartItem(id:string):Observable<any>{

  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }

  updateCartItem(id:string,count:number):Observable<any>{

    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count:count
    })
    }

    clearAllCart():Observable<any>{

      return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`)
      }


      orderCash(cartId:string,shippingAddress:ShippingAddress):Observable<any>{
        return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
          {
            shippingAddress :shippingAddress
          }
        )
      }

      orderVisa(cartId:string,shippingAddress:ShippingAddress):Observable<any>{
        return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
          {
            shippingAddress :shippingAddress
          }
        )


      }

      getUserOrders():Observable<any>{
        return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
      }
    }
