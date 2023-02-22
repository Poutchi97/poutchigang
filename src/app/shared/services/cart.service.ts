import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private display = new BehaviorSubject<any>(false);
  private produitsStorage = new BehaviorSubject<any>({});
  private sousTotal = new BehaviorSubject<number>(0);
  public produitsStorageKey: any;

  _sousTotal = this.sousTotal.asObservable();
  _produitsStorage = this.produitsStorage.asObservable();
  isDisplayable = this.display.asObservable();

  constructor() { }

  setDisplayable(status: boolean) {
    this.display.next(status);
  }

  setProduits(produitsStorage: any) {
    this.produitsStorage.next(produitsStorage);
  }

  CalculeDuSousTotal(): void {
    let sousTot: number = 0;
    this._produitsStorage.subscribe({
      next: (prod) => {
        for (let index = 0; index < prod.length; index++) {
          sousTot += prod[index].Price
          this.sousTotal.next(sousTot);
        }

      }
    })
  }
}
