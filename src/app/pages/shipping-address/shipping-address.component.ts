import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingAddress } from 'src/app/interfaces/shipping-address';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent {

  cartId:string|null =null;
  isLoading:boolean =false
  apiErrorMassage:string=''
  url:string =''

  shippingAddressForm:FormGroup = new FormGroup({
    details : new FormControl(null,[Validators.required]),
    phone : new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city : new FormControl(null,[Validators.required])
  })

  constructor(private _ActivatedRoute:ActivatedRoute,private _CartService:CartService,private _Router:Router) {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params.get('id'));
        this.cartId = params.get('id');
      }
    })
  }

handelFormcash (forms:FormGroup) {
  if(forms.valid){
    this.isLoading =true ;
    if(this.cartId !=null){
      this._CartService.orderCash(this.cartId , forms.value).subscribe({
        next :(data)=>{
          console.log(data);
          this.isLoading =false
          if(data.status ==   "success"){
            this._Router.navigate(['/allorders'])
          }
        },
        error:(err)=>{
          this.isLoading = false ;
          this.apiErrorMassage = err.error.message
        }
            })
    }

  }
}

handelFormVisa(forms:FormGroup){
  if(forms.valid){
    this.isLoading =true ;
    if(this.cartId !=null){
      this._CartService.orderVisa(this.cartId, forms.value).subscribe({
        next :(data)=>{
          console.log(data);
          this.isLoading =false
          this.url =data.session.url
        this.navigateToPay()
        },
        error:(err)=>{
          this.isLoading = false ;
          this.apiErrorMassage = err.error.message
        }
            })
    }

  }



}

navigateToPay(){
  window.location.href = this.url;
}


}


