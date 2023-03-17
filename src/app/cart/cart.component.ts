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
  public produitsStorage: any;
  public produitsPrix: number[] = [];
  public total: number = 0;
  public fraisDePort = 0;
  public isTaille = true;

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
      next: (produits: ICatalogue) => {
        this.produitsStorage = produits;
        this.calculeDuSousTotal();
        this.calculeDuTotal();
      }
    });
  }

  deleteItem(id: string) {
    this._storage.deleteProduits(id);
    this._storage.getProduitsCount();
    this._cart.setProduits(this._storage.getProduits())
    this.getItem();
  }

  calculeDuSousTotal() {
    this.sousTotal = 0;
    for (let index = 0; index < this.produitsStorage.length; index++) {
      this.sousTotal += this.produitsStorage[index].Price;
    }
  }

  calculeDuTotal() {
    this.total = 0;
    this.fraisDePort = 0;

    if (this.sousTotal >= 30) {
      this.fraisDePort = 5.99
    }
    if (this.sousTotal >= 40) {
      this.fraisDePort = 6.99
    }
    if (this.sousTotal < 30 && this.sousTotal > 0) {
      this.fraisDePort = 4.99
    }

    this.total = Math.round((this.sousTotal + this.fraisDePort) * 100) / 100;

  }

}
