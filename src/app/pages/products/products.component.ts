import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts :Iproduct[] = [];
  searchKey :string ='';
  constructor(private _ProductsService:ProductsService,private _WishlistService:WishlistService){}



ngOnInit(){
this.getAllProducts();
}

getAllProducts(){
  this._ProductsService.getAllProducts().subscribe({
    next: (data)=>{
      console.log(data.data);

      this.allProducts = data.data;
    },
    error: (err)=>{console.log(err);}
  })
}




}
