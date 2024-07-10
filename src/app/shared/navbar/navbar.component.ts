import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

isLoggedIn : boolean = false

numOfCartItems:number = 0
constructor(private _authService: AuthService, private _CartService:CartService){

  this._authService.userToken.subscribe({
    next: (data)=>{
      console.log();
      if(_authService.userToken.getValue()){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    }

  })

this._CartService.numOfCartItems.subscribe({
  next: (data) => {
    this.numOfCartItems = data
  }
})

}

  logout(){
    this._authService.logOut();
  }

}
