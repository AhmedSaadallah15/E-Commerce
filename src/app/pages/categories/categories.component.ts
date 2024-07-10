import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/i-category';
import { CategoreysService } from 'src/app/services/categoreys.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


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
