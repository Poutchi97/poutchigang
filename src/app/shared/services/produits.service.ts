import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICatalogue } from 'src/app/interfaces/icatalogue';

export enum TypeProduit {
  Vetement = 1,
  Accessoire = 2

}
@Injectable({
  providedIn: 'root'
})

export class ProduitsService {
  produitInfos: any
  public catalogue!: ICatalogue[];

  // url: string = "http://localhost:4200/backend/catalogue";
  constructor(
    private http: HttpClient
  ) {
    this.catalogue = [
      {
        Id: 1,
        Title: "Gym Bro",
        Categorie: "Tee-shirt",
        Price: 29.99,
        Quantity: 0,
        Taille: ["S", "M", "L", "XL", "XXL"],
        Type: TypeProduit.Vetement,
        Image: "../../../assets/images/gymbro.png",
        ImageCheckout: "./src/assets/images/gymbro.png",
        SecImage: "../../../assets/images/gymbro.png",
        Description: "Le T-shirt Gym Bro est la tenue idéale pour les passionnés de fitness et les athlètes en devenir. Conçu avec des matériaux doux et respirants, ce t-shirt vous assurera un confort maximum pendant votre entraînement. L'impression élégante et moderne montre votre engagement envers votre santé et votre style de vie actif. Que vous soyez au gym ou en déplacement, le T-shirt Gym Bro vous permettra de rester à la pointe de la mode tout en renforçant votre détermination et votre motivation."


      },
      {
        Id: 2,
        Title: "Poutchi Nrv",
        Categorie: "Hoodies",
        Price: 41.99,
        Quantity: 0,
        Taille: ["S", "M", "L", "XL", "XXL"],
        Type: TypeProduit.Vetement,
        Image: "../../../assets/images/nrv.png",
        ImageCheckout: "./src/assets/images/nrv.jpg",
        SecImage: "../../../assets/images/gymbro.png",
        Description: "Le pull NRV est la pièce parfaite pour les amateurs de musculation et pour les journées de détente. Conçu avec des matériaux doux et confortables, ce pull est idéal pour la musculation ou pour une utilisation quotidienne. L'impression NRV discrète mais élégante montre votre amour pour la forme physique et votre style décontracté. Ce pull est facile à porter et à entretenir, et vous assurera un confort optimal peu importe ce que vous faites. Portez le pull NRV pour une allure décontractée et confortable à la fois en salle de sport et dans la vie de tous les jours."

      },
      {
        Id: 3,
        Title: "Poutchi Casquette",
        Categorie: "Casquette",
        Price: 24.99,
        Quantity: 0,
        Taille: ["S", "M", "L", "XL", "XXL"],
        Type: TypeProduit.Accessoire,
        Image: "../../../assets/images/Poutchicasquette.png",
        ImageCheckout: "./src/assets/images/Poutchicasquette.jpg",
        SecImage: "../../../assets/images/Poutchicasquette.png",
        Description: "La casquette Poutchi est le choix parfait pour tout fan de la marque. Fabriquée à partir de matériaux de haute qualité, cette casquette est durable et confortable à porter toute la journée. Avec un design élégant et épuré, la casquette arbore fièrement le logo de la marque Poutchi sur le devant, faisant de cette casquette un must-have pour les amateurs de mode urbaine. Que ce soit pour compléter votre look ou pour montrer votre soutien à la marque, la casquette Poutchi est un incontournable pour tous les fans de la marque."


      },
      {
        Id: 4,
        Title: "Poutchi Mousqueton",
        Categorie: "Accessoire",
        Price: 5,
        Quantity: 0,
        Taille: ["S", "M", "L", "XL", "XXL"],
        Type: TypeProduit.Accessoire,
        Image: "../../../assets/images/mousqueton.jpg",
        ImageCheckout: "./src/assets/images/mousqueton.jpg",
        SecImage: "../../../assets/images/mousqueton.jpg",
        Description: "Le mousqueton Poutchi est le compagnon parfait pour tous les amateurs de fitness et d'aventure. Conçu à partir d'une imprimante 3D de haute qualité, ce mousqueton est léger, résistant et extrêmement durable. Il est idéal pour accrocher vos accessoires de musculation, vos chaussures, votre bouteille d'eau ou tout autre équipement essentiel à votre sac à dos. Avec un design élégant et moderne, le mousqueton Poutchi est un must-have pour tous les aventuriers urbains en quête d'un équipement fiable et fonctionnel. Que vous soyez en randonnée, en voyage ou à la salle de sport, le mousqueton Poutchi sera votre meilleur allié pour transporter votre équipement en toute sécurité."


      },
    ]
  }

}
