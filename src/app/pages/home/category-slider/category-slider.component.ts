import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/i-category';
import { CategoreysService } from 'src/app/services/categoreys.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit{


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin:2,
    navText: ['','' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }



  categorys: ICategory[] = [];


  constructor( private _categoryService: CategoreysService){

  }


ngOnInit(){
  this.getAllCategorys();
}

getAllCategorys(){
  this._categoryService.getAllCategorys().subscribe({
    next: (data)=>{
      console.log(data.data);
      this.categorys = data.data;
    },
    error: (error)=>{
      console.log(error);
    }
  })
}
}
