import { Injectable } from '@angular/core';
import { ICatalogue } from 'src/app/interfaces/icatalogue';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  public items: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public itemsCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public _itemsCount = this.itemsCount.asObservable();
  public _items = this.items.asObservable();
  private storageKeyForProducts = "products";
  constructor() { }

  addProduit(produit: ICatalogue) {
    const productsArray = JSON.parse(localStorage.getItem(this.storageKeyForProducts)!) || [];
    productsArray.push(produit);
    localStorage.setItem(this.storageKeyForProducts, JSON.stringify(productsArray));
  }

  getProduits() {
    const dataProduitsStorage = localStorage.getItem(this.storageKeyForProducts);
    if (dataProduitsStorage) {
      const parsedData = JSON.parse(dataProduitsStorage);
      return parsedData
    }
    else {
      return [];
    }
  }

  updateProducts(produits: ICatalogue) {
    localStorage.setItem(this.storageKeyForProducts, JSON.stringify(produits));

  }

  deleteProduits(id: string) {
    const productsArray = JSON.parse(localStorage.getItem(this.storageKeyForProducts)!);
    const index = productsArray.findIndex((produit: any) => produit.Id === id);
    if (index !== -1) {
      productsArray.splice(index, 1);
    }
    localStorage.setItem(this.storageKeyForProducts, JSON.stringify(productsArray));
  }

  getProduitsCount() {
    const dataProduitsStorage = localStorage.getItem(this.storageKeyForProducts);
    if (dataProduitsStorage) {
      this.itemsCount.next(JSON.parse(dataProduitsStorage).length);
    }
  }

  emptyStorage() {
    localStorage.clear();
    this.itemsCount.next(0);
  }
}
