import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ICatalogue } from '../interfaces/icatalogue';
import { CartService } from '../shared/services/cart.service';
import { LocalstorageService } from '../shared/services/localstorage.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  faTrash = faTrash;
  public display!: boolean;
  public totalToDisplay: string = "";
  public produitsStorage: any;
  public produitsPrix: number[] = [];
  public total: number = 0;
  public fraisDePort = 0;
  public isTaille = true;
  public numbersArticle: number[] = [];
  public quantitySelected!: number;
  public numbersArticleSelected: number = 1;

  constructor(
    private _cart: CartService,
    private _storage: LocalstorageService,
    private _http: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.setNumbersArticule();
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
        this.produitsStorage.forEach((element: any) => {
          this.calculeDuSousTotal(element.Id, element.Taille[0])
        });
      }
    });
  }

  setNumbersArticule() {
    for (let i = 1; i <= 25; i++) {
      this.numbersArticle.push(i);
    }
  }

  deleteItem(id: string) {
    this._storage.deleteProduits(id);
    this._storage.getProduitsCount();
    this._cart.setProduits(this._storage.getProduits())
    this.getItem();

  }

  calculeDuSousTotal(id: number, taille: string) {
    this.total = 0;
    this.totalToDisplay = "0"
    for (let index = 0; index < this.produitsStorage.length; index++) {
      this.total += this.produitsStorage[index].Price * this.produitsStorage[index].Quantity;
    };

    const products = this._storage.getProduits();
    const existingItemIndex = products.findIndex((item: any) => item.Id === id && item.Taille[0] === taille[0])
    if (existingItemIndex !== -1) {
      products[existingItemIndex].Quantity = this.produitsStorage[existingItemIndex].Quantity;
    }
    this._storage.updateProducts(products);
    this.totalToDisplay = this.total.toFixed(2)
  }


  emptyCart() {
    this._storage.emptyStorage();
    this._cart.setProduits(this._storage.getProduits())
  }


  onCheckout() {
    this._http.post('https://poutchigang.herokuapp.com/checkout', {
      items: this.produitsStorage
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe("pk_live_51My9R5GEdrsUZVAAk9EKEGVbG92vlhiLeTEW0KCtJ0kW6UkCDeQmPT1AHJNQnfmarc7rqQHkcSdf1uScladNz5So00gtB9ChwS");
      stripe?.redirectToCheckout({
        sessionId: res.id,
      });
    });
  }


  changeDisplayOfCart() {
    this._cart.setDisplayable(false);
    this.onCheckout();
  }

}
