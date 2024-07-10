import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.css']
})
export class ProductTwoComponent implements OnInit{

  productsTwo:Iproduct[] =[]

  searchKey :string ='';
  constructor(private _ProductsService:ProductsService ) { }


  ngOnInit(): void {
    this._ProductsService.getAllProductTwo().subscribe({
      next: (data) => {
        this.productsTwo = data.data;
        console.log(data.data);

      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
