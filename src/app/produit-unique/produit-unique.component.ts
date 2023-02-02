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

  public catalogue!: ICatalogue[];
  public idProductToDisplay: any;
  public currentProducToDisplay: any;

  // public produits!: ICatalogue[];

  constructor(
    private _produits: ProduitsService,
    private _router: Router,
    private _ar: ActivatedRoute
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
    this.idProductToDisplay = this._ar.snapshot.params['id'];
    this.getOneProduct();

  }

  public getOneProduct() {
    this.currentProducToDisplay = this.catalogue[this.idProductToDisplay - 1];
    console.log(this.currentProducToDisplay);
  }
}
