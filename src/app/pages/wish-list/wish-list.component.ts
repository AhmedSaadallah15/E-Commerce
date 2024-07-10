import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{

  allProducts:Iproduct[] =[]

  constructor(private _WishlistService:WishlistService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,

  ){

  }

ngOnInit(): void {
 this.displayWishlist();
}

  displayWishlist(){
    this._WishlistService.displayWishlist().subscribe({
      next: (data) => {
        console.log(data);
        this.allProducts = data.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  

  addToCart(id:string){
    this._CartService.addToCart(id).subscribe({
      next: (data) => {
       this._ToastrService.success('Added Succsese', 'Succsesfully');
       console.log(data)
      },
      error: (error) => console.log(error)
    })
  }

  removeFromWishlist(id:string){
    this._WishlistService.removeFromWishlist(id).subscribe({
      next: (data) => {
        this._ToastrService.error('Removed from wishlist', 'Succsesfully');
        console.log(data)
        this.displayWishlist()

      },
      error: (error) => console.log(error)
    })
}
}
