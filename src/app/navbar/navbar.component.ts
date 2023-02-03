import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCart = faCartShopping
  constructor(
    private _cart: CartService
  ) { }

  ngOnInit(): void {
  }

  setStatus() {
    this._cart.setDisplayable(true);
  }
}
