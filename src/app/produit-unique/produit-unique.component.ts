import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatalogue } from '../interfaces/icatalogue';
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

  // public produits!: ICatalogue[];

  constructor(
    private _produits: ProduitsService,
    private _router: Router,
    private _ar: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.idProductToDisplay = this._ar.snapshot.params['id'];
    this.getOneProduct();

  }

  public getOneProduct() {
    this.currentProducToDisplay = this.catalogue[this.idProductToDisplay - 1];
    console.log(this.currentProducToDisplay);
  }
}
