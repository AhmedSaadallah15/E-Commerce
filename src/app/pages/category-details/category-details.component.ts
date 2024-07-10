import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/products';
import { CategoreysService } from 'src/app/services/categoreys.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{


  categoryId?: string|null
  categoryDateils?: Iproduct[];


constructor(private _CategoreysService:CategoreysService , private _ActivatedRoute:ActivatedRoute){}

ngOnInit(): void {

this._ActivatedRoute.paramMap.subscribe({
  next: (data)=>{
    console.log(data.get('id'));
    this.categoryId = data.get('id');


if(this.categoryId != null){
  this._CategoreysService.getAllCategoryDateils(this.categoryId).subscribe({
    next: (data)=>{
      console.log(data.data);
      this.categoryDateils = data.data;
    },
    error: (error)=>{
      console.log(error);
    }
  })
}

  }



})

}


}
