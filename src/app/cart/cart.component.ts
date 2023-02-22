import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ICatalogue } from '../interfaces/icatalogue';
import { CartService } from '../shared/services/cart.service';
import { LocalstorageService } from '../shared/services/localstorage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  faTrash = faTrash;
  public display!: boolean;
  public sousTotal: number = 0;
  public produitsStorage: any

  constructor(
    private _cart: CartService,
    private _storage: LocalstorageService,
  ) {
  }
  ngOnInit(): void {

    this._cart.isDisplayable.subscribe({
      next: (status) => {
        this.display = status;
      }
    });
    this.getItem();
    this.CalculeDuSousTotal();
  }

  getItem() {
    this._cart._produitsStorage.subscribe({
      next: (produits: any) => {
        this.produitsStorage = produits;
      }
    });
  }

  deleteItem(id: string) {
    this._storage.deleteProduits(id);
    this._cart.setProduits(this._storage.getProduits())
    this.CalculeDuSousTotal();

    this.getItem();
  }

  CalculeDuSousTotal() {
    this._cart._sousTotal.subscribe({
      next: (st) => {

        console.log(st);

        this.sousTotal = st;
      }
    });
  }

}
