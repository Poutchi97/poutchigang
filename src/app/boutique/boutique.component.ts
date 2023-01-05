import { Component } from '@angular/core';
import { ICatalogue } from '../interfaces/icatalogue';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent {

  public catalogue!: ICatalogue[];

  constructor() {
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

    },
    {
      Id: 5,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png"

    },
    {
      Id: 6,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png"

    },
    {
      Id: 7,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png"

    },
    {
      Id: 8,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png"

    }]
  }
}
