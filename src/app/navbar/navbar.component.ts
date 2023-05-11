import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
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
  isSticky: boolean = false;
  navbarBackgroundColor: string = 'transparent';
  constructor(
    private _cart: CartService,
    private _localStorage: LocalstorageService,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.getLocalstorageCountItem();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = offset > 50; // ajuste le nombre de pixels après lequel la navbar devient sticky
    this.navbarBackgroundColor = this.isSticky ? '#171717' : 'transparent'; // ajuste la couleur de fond de la navbar
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
