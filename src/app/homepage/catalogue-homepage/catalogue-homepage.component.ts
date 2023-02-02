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
  public catalogue!: ICatalogue[];

  // public produits!: ICatalogue[];

  constructor(
    private _produits: ProduitsService,
    private _router: Router
  ) {
    this.catalogue = [{
      Id: 1,
      Title: "Comp Poutchi Tees",
      Categorie: "Gym Bro",
      Price: 29.99,
      Image: "../../../assets/images/gymbro.jpg",
      SecImage: "../../../assets/images/gymbro.png"
    },
    {
      Id: 2,
      Title: "Comp Poutchi Tees",
      Categorie: "Gym Bro",
      Price: 29.99,
      Image: "../../../assets/images/gymbro.png",
      SecImage: "../../../assets/images/gymbro.png"

    },
    {
      Id: 3,
      Title: "Poutchi Bonnet",
      Categorie: "Bonnet",
      Price: 19.99,
      Image: "../../../assets/images/poutchibonnet.jpg",
      SecImage: "../../../assets/images/gymbro.png"

    },
    {
      Id: 4,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png"

    }]
  }

  ngOnInit(): void {

  }

  public displayDetails(id: number) {
    let currentProduct = this.catalogue[id];
    this._router.navigateByUrl('/boutique/produit/' + currentProduct.Id);
    console.log(currentProduct);
  }

}
