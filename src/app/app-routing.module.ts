import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { VerifyCodeComponent } from './pages/verify-code/verify-code.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { authGuard } from './Guards/auth.guard';
import { noAuthGuard } from './Guards/no-auth.guard';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { BrandDetailsComponent } from './pages/brand-details/brand-details.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { ProductTwoComponent } from './pages/product-two/product-two.component';
import { ShippingAddressComponent } from './pages/shipping-address/shipping-address.component';
import { AllordersComponent } from './pages/allorders/allorders.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"home",canActivate:[authGuard] ,component: HomeComponent},
  {path:"products",canActivate:[authGuard] , component: ProductsComponent},
  {path:"brands",canActivate:[authGuard] , component: BrandsComponent},
  {path:"categories",canActivate:[authGuard] , component: CategoriesComponent},
  {path:"productsTwo",canActivate:[authGuard] , component: ProductTwoComponent},
  {path:"allorders",canActivate:[authGuard] , component: AllordersComponent},
  {path:"product/:id",canActivate:[authGuard] , component: ProductDetailsComponent},
  {path:"brand/:id",canActivate:[authGuard] , component: BrandDetailsComponent},
  {path:"category/:id",canActivate:[authGuard] , component: CategoryDetailsComponent},
  {path:"shippingAddress/:id",canActivate:[authGuard] , component: ShippingAddressComponent},
  {path:"login",canActivate:[noAuthGuard] , component: LoginComponent},
  {path:"register", canActivate:[noAuthGuard] , component: RegisterComponent},
  {path:"forget-password",canActivate:[noAuthGuard] ,  component: ForgetPasswordComponent},
  {path:"verify-code",canActivate:[noAuthGuard] ,  component: VerifyCodeComponent},
  {path:"reset-password",canActivate:[noAuthGuard] ,  component: ResetPasswordComponent},

  { path: 'cart',canActivate:[authGuard] ,loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },

  { path: 'wishList',canActivate:[authGuard] , loadChildren: () => import('./pages/wish-list/wish-list.module').then(m => m.WishListModule) },

  { path: 'settings', canActivate:[authGuard] , loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) },




  {path:"**", component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
