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
  public produitsPrix: number[] = [];

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

  }

  getItem() {
    this._cart._produitsStorage.subscribe({
      next: (produits: any) => {
        this.produitsStorage = produits;
        this.calculeDuSousTotal();
      }
    });
  }

  deleteItem(id: string) {
    this._storage.deleteProduits(id);
    this._cart.setProduits(this._storage.getProduits())

    this.getItem();
  }

  calculeDuSousTotal() {
    this.sousTotal = 0;
    for (let index = 0; index < this.produitsStorage.length; index++) {
      this.sousTotal += this.produitsStorage[index].Price;
    }
    console.log(this.sousTotal)
  }

}
