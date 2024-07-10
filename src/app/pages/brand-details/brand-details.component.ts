import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/products';

import { BarndsService } from 'src/app/services/barnds.service';


@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {

brandDetailsId?: string|null
brandDetails?: Iproduct[];
constructor(private _BarndsService:BarndsService , private _ActivatedRoute:ActivatedRoute ){}

ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
  next: (data)=>{
    console.log(data.get('id'));
    this.brandDetailsId = data.get('id');

if(this.brandDetailsId != null){
  this._BarndsService.getBrandDateils(this.brandDetailsId).subscribe({
    next: (data)=>{
      console.log(data.data);
      this.brandDetails = data.data;
    },
    error: (error)=>{
      console.log(error);
    }
  })
}


  }})
}}
