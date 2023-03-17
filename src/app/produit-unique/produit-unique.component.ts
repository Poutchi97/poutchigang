import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatalogue } from '../interfaces/icatalogue';
import { CartService } from '../shared/services/cart.service';
import { LocalstorageService } from '../shared/services/localstorage.service';
import { ProduitsService } from '../shared/services/produits.service';

@Component({
  selector: 'app-produit-unique',
  templateUrl: './produit-unique.component.html',
  styleUrls: ['./produit-unique.component.scss']
})
export class ProduitUniqueComponent {

  public catalogue: ICatalogue[] = this._produits.catalogue;
  public idProductToDisplay: any;
  public currentProducToDisplay: any;
  public tailleSelected: string = "";
  public isTailleSelected: boolean = true;
  public displayTaille: boolean = true;

  // public produits!: ICatalogue[];

  constructor(
    private _produits: ProduitsService,
    private _cart: CartService,
    private _router: Router,
    private _ar: ActivatedRoute,
    private _storage: LocalstorageService

  ) {
  }

  ngOnInit(): void {
    this.idProductToDisplay = this._ar.snapshot.params['id'];
    this.getOneProduct();

  }

  public getOneProduct() {
    this.currentProducToDisplay = this.catalogue[this.idProductToDisplay - 1];
    this.checkTypeProduct();
  }

  public checkTypeProduct() {
    if (this.currentProducToDisplay.Type != 1) {
      this.displayTaille = false
    }
  }

  public addItemToStorage() {
    if (this.tailleSelected.length <= 0 && this.currentProducToDisplay.Type == 1) {
      this.isTailleSelected = false;
    }
    else {
      this._storage.addProduit({
        Id: this.currentProducToDisplay.Id,
        Title: this.currentProducToDisplay.Title,
        Categorie: this.currentProducToDisplay.Categorie,
        Price: this.currentProducToDisplay.Price,
        Taille: [this.tailleSelected],
        Type: this.currentProducToDisplay.Type,
        Image: this.currentProducToDisplay.Image,
        SecImage: this.currentProducToDisplay.SecImage,
        Description: this.currentProducToDisplay.Description
      });
      this.setStatus();
    }
  }

  public setStatus() {
    this._cart.setDisplayable(true);
    this._cart.setProduits(this._storage.getProduits())
    this._storage.getProduitsCount();

  }

  public tailleSelectedStyle(taille: string) {
    this.tailleSelected = taille;
    this.isTailleSelected = true;
  }
}
