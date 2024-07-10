import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/interfaces/i-brand';
import { BarndsService } from 'src/app/services/barnds.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {


  allBrands :IBrand[] =[]


  constructor(private _BarndsService:BarndsService){}

ngOnInit(){
  this.getAllBrands();
}
getAllBrands(){
  this._BarndsService.getAllBrands().subscribe(
    (res:any)=>{
      console.log(res.data);
      this.allBrands = res.data;
    },
    (err:any)=>{
      console.log(err);
    }
  )
}

}
