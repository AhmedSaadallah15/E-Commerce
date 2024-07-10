import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from './interfaces/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


allCart:Cart|null ={} as Cart


constructor(private _CartService:CartService){}

ngOnInit(): void {
this.displayCart()
}

displayCart(){
  this._CartService.getCart().subscribe({
    next: (data) => {
      console.log(data);
      this.allCart = data;
    },
    error: (error) => {
      console.log(error);
    }
  })
}



removeCartItem(id:string) {
  this._CartService.removeCartItem(id).subscribe({
    next: (data) => {
      console.log(data);
      this.allCart = data;
    },
    error: (error) => {
      console.log(error);
    }
  })
}

updateCartItem(id:string, count:number){
  this._CartService.updateCartItem(id,count).subscribe({
    next: (data) => {
      console.log(data);
      this.allCart = data;
    },
    error: (error) => {
      console.log(error);
    }
  })
}

clearAllCart(){
  this._CartService.clearAllCart().subscribe({
    next: (data) => {
      console.log(data);
      this.allCart = null
      },
    error: (error) => {
      console.log(error);
    }
  })
}

}
