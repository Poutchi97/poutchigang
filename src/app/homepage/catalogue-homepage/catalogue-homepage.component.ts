import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICatalogue } from 'src/app/interfaces/icatalogue';
import { ProduitsService } from 'src/app/shared/services/produits.service';

@Component({
  selector: 'app-catalogue-homepage',
  templateUrl: './catalogue-homepage.component.html',
  styleUrls: ['./catalogue-homepage.component.scss']
})
export class CatalogueHomepageComponent implements OnInit {
  public catalogue: ICatalogue[] = this._produits.catalogue;

  // public produits!: ICatalogue[];

  constructor(
    private _produits: ProduitsService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  public displayDetails(id: number) {
    let currentProduct = this.catalogue[id];
    this._router.navigateByUrl('/boutique/produit/' + currentProduct.Id);
  }

}
