import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Iproduct } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

      productId?: string | null;
      productDateils:Iproduct = {}as Iproduct



      customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
          940: {
            items: 1
          }
        },
        nav: true
      }



  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService,
    private _CartService:CartService , private _ToastrService:ToastrService
  ) { }


ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next: (data)=>{
      console.log(data.get('id'));
      this.productId = data.get('id');}})


      if(this.productId != null){
        this._ProductsService.getAllProductDateils(this.productId).subscribe({
          next: (data)=>{
            console.log(data.data);
            this.productDateils = data.data;
            console.log(this.productDateils);

          },
          error: (error)=>{
            console.log(error);
          }
        })
      }

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




}
