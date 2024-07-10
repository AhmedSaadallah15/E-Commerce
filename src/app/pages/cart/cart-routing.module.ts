import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { authGuard } from 'src/app/Guards/auth.guard';

const routes: Routes = [
  { path: '',canActivate:[authGuard], component: CartComponent },
  { path: 'cart',canActivate:[authGuard], component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
