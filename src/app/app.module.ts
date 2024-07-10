import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { VerifyCodeComponent } from './pages/verify-code/verify-code.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { BrandDetailsComponent } from './pages/brand-details/brand-details.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { ProductTwoComponent } from './pages/product-two/product-two.component';
import { MainSliderComponent } from './pages/home/main-slider/main-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategorySliderComponent } from './pages/home/category-slider/category-slider.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SearchPipe } from './pipes/search.pipe';
import { ShippingAddressComponent } from './pages/shipping-address/shipping-address.component';
import { AllordersComponent } from './pages/allorders/allorders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    ForgetPasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    ProductComponent,
    ProductDetailsComponent,
    BrandDetailsComponent,
    CategoryDetailsComponent,
    ProductTwoComponent,
    MainSliderComponent,
    CategorySliderComponent,
    SpinnerComponent,
    SearchPipe,
    ShippingAddressComponent,
    AllordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot({
       positionClass: 'toast-top-right',
    }),
    CommonModule,

  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS,
      useClass :AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
