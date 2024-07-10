import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListComponent } from './wish-list.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    WishListComponent,
  ],
  imports: [
    CommonModule,
    WishListRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
   }),
  ]
})
export class WishListModule { }
