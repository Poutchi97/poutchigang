import { Injectable } from '@angular/core';
import { ICatalogue } from 'src/app/interfaces/icatalogue';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  public items: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public _items = this.items.asObservable();
  private storageKey = 0;
  constructor() { }

  addProduit(produit: ICatalogue) {
    this.storageKey++;
    localStorage.setItem(this.storageKey.toString(), JSON.stringify(produit));
  }
}
