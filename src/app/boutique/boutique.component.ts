import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICatalogue } from '../interfaces/icatalogue';
import { ProduitsService } from '../shared/services/produits.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent {

  public catalogue: ICatalogue[] = this._produits.catalogue;

  constructor(
    private _produits: ProduitsService,
    private _router: Router
  ) {

  }

  public displayDetails(id: number) {
    let currentProduct = this.catalogue[id];
    this._router.navigateByUrl('/boutique/produit/' + currentProduct.Id);
    console.log(currentProduct);
  }
}
