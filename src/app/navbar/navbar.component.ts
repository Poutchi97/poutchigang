import { Component, OnInit } from '@angular/core';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shared/services/cart.service';
import { LocalstorageService } from '../shared/services/localstorage.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCart = faCartShopping
  faBars = faBars;
  display!: boolean;
  localItemsCount: string = '';
  constructor(
    private _cart: CartService,
    private _localStorage: LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.getLocalstorageCountItem();
  }

  setStatus() {
    this._cart.setDisplayable(true);
    this._cart.setProduits(this._localStorage.getProduits());
    this.getLocalstorageCountItem();
  }

  getLocalstorageCountItem() {
    this._localStorage.getProduitsCount();
    this._localStorage._itemsCount.subscribe({
      next: (count: number) => {
        this.localItemsCount = count.toString();
      }
    })
  }
}
