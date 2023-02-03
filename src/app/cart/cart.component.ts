import { Component } from '@angular/core';
import { ICatalogue } from '../interfaces/icatalogue';
import { CartService } from '../shared/services/cart.service';
import { LocalstorageService } from '../shared/services/localstorage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public display!: boolean;
  public produitsStorageKey: any;
  public produitsStorage: any

  constructor(
    private _cart: CartService,
    private _storage: LocalstorageService
  ) {
  }
  ngOnInit(): void {

    this._cart.isDisplayable.subscribe({
      next: (status) => {
        this.display = status;
      }
    })
    this.produitsStorageKey = Object.keys(localStorage);
    this.getItem();
  }

  getItem() {
    this.produitsStorage = this.produitsStorageKey.map((key: any) => localStorage.getItem(key));
    console.log("produitsStorage", this.produitsStorage)
  }

}
