import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit{


  allOrders:Orders[] = []

  constructor(private _CartService:CartService){}

  ngOnInit(): void {
    this.getUserOrders()
  }

getUserOrders(){
  this._CartService.getUserOrders().subscribe({
    next: (data) => {
      console.log(data.data);
      this.allOrders = data.data;
    },
    error: (error) => {
      console.log(error);
    }
  })
}










}
