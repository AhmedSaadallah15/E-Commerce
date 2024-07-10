import { Component, Input, OnInit } from '@angular/core';
import { IBrand } from 'src/app/interfaces/i-brand';
import { Iproduct } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{


  isWishlist:boolean = false;
  wishlist:any
  allProducts :Iproduct[] = [];



 @Input() product!:Iproduct
 @Input() brand!:IBrand

 constructor(private _CartService:CartService,
  private _ToastrService:ToastrService,
  private _WishlistService:WishlistService
  ){



  }

ngOnInit(): void {
this.display();

}



updateWishlistState() {
  this.isWishlist = this.allProducts.some(product => product._id === this.product._id);
}

display(){
    this._WishlistService.displayWishlist().subscribe({
      next: (data) => {
        this.allProducts = data.data
        this.updateWishlistState();
      },
      error: (error) => console.log(error)
    })
}


 addToCart(id:string){
   this._CartService.addToCart(id).subscribe({
     next: (data) => {
      this._ToastrService.success('Added Succsese', 'Succsesfully');
      console.log(data)
      this._CartService.numOfCartItems.next(data.numOfCartItems)
     },
     error: (error) => console.log(error)
   })
 }




toggleWishlist(){
   if(this.isWishlist){
     this._WishlistService.removeFromWishlist(this.product._id).subscribe({
       next: (data) => {
         this._ToastrService.error('Removed from wishlist', 'Succsesfully');
         console.log(data.data)
         this.wishlist=data.data
        this.isWishlist = false;
        this.display();
       },
       error: (error) => console.log(error)
     })
   }else{
     this._WishlistService.addToWishlist(this.product._id).subscribe({
       next: (data) => {
         this._ToastrService.success('Added to wishlist', 'Succsesfully');
         console.log(data.data)
         this.wishlist=data.data
         this.isWishlist = true;
         this.display();
       },
       error: (error) => console.log(error)
     })
   }

}





}
