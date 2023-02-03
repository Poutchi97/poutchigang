import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private display = new BehaviorSubject<any>(false);
  public produitsStorageKey: any;
  public produitsStorage: any
  isDisplayable = this.display.asObservable();


  constructor() {
    this.produitsStorageKey = Object.keys(localStorage);

  }

  setDisplayable(status: boolean) {
    this.display.next(status);
  }

  getItem() {
    this.produitsStorage = this.produitsStorageKey.map((key: any) => localStorage.getItem(key));
  }
}
