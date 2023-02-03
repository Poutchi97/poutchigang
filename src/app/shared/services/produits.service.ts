import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICatalogue } from 'src/app/interfaces/icatalogue';

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
    this.catalogue = [{
      Id: 1,
      Title: "Gym Bro",
      Categorie: "Gym Bro",
      Price: 29.99,
      Image: "../../../assets/images/gymbro.jpg",
      SecImage: "../../../assets/images/gymbro.png",
      Description: "Le T-shirt Gym Bro est la tenue idéale pour les passionnés de fitness et les athlètes en devenir. Conçu avec des matériaux doux et respirants, ce t-shirt vous assurera un confort maximum pendant votre entraînement. L'impression élégante et moderne montre votre engagement envers votre santé et votre style de vie actif. Que vous soyez au gym ou en déplacement, le T-shirt Gym Bro vous permettra de rester à la pointe de la mode tout en renforçant votre détermination et votre motivation."

    },
    {
      Id: 2,
      Title: "Gym Bro",
      Categorie: "Gym Bro",
      Price: 29.99,
      Image: "../../../assets/images/gymbro.png",
      SecImage: "../../../assets/images/gymbro.png",
      Description: "Le T-shirt Gym Bro est la tenue idéale pour les passionnés de fitness et les athlètes en devenir. Conçu avec des matériaux doux et respirants, ce t-shirt vous assurera un confort maximum pendant votre entraînement. L'impression élégante et moderne montre votre engagement envers votre santé et votre style de vie actif. Que vous soyez au gym ou en déplacement, le T-shirt Gym Bro vous permettra de rester à la pointe de la mode tout en renforçant votre détermination et votre motivation."


    },
    {
      Id: 3,
      Title: "Poutchi Bonnet",
      Categorie: "Bonnet",
      Price: 19.99,
      Image: "../../../assets/images/poutchibonnet.jpg",
      SecImage: "../../../assets/images/gymbro.png",
      Description: "Le bonnet Poutchi est l'accessoire idéal pour les jours frais et venteux. Fabriqué avec des matériaux de qualité supérieure pour garantir une chaleur et un confort optimaux, ce bonnet est conçu pour vous protéger du froid tout en vous offrant un style tendance. L'impression Poutchi audacieuse et colorée montre votre personnalité unique et votre amour pour la vie active. Portez le bonnet Poutchi lors de vos sorties en plein air pour une allure confortable et décontractée",

    },
    {
      Id: 4,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png",
      Description: "Le pull NRV est la pièce parfaite pour les amateurs de musculation et pour les journées de détente. Conçu avec des matériaux doux et confortables, ce pull est idéal pour la musculation ou pour une utilisation quotidienne. L'impression NRV discrète mais élégante montre votre amour pour la forme physique et votre style décontracté. Ce pull est facile à porter et à entretenir, et vous assurera un confort optimal peu importe ce que vous faites. Portez le pull NRV pour une allure décontractée et confortable à la fois en salle de sport et dans la vie de tous les jours."

    },
    {
      Id: 5,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png",
      Description: "Le pull NRV est la pièce parfaite pour les amateurs de musculation et pour les journées de détente. Conçu avec des matériaux doux et confortables, ce pull est idéal pour la musculation ou pour une utilisation quotidienne. L'impression NRV discrète mais élégante montre votre amour pour la forme physique et votre style décontracté. Ce pull est facile à porter et à entretenir, et vous assurera un confort optimal peu importe ce que vous faites. Portez le pull NRV pour une allure décontractée et confortable à la fois en salle de sport et dans la vie de tous les jours."

    },
    {
      Id: 6,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png",
      Description: "Le pull NRV est la pièce parfaite pour les amateurs de musculation et pour les journées de détente. Conçu avec des matériaux doux et confortables, ce pull est idéal pour la musculation ou pour une utilisation quotidienne. L'impression NRV discrète mais élégante montre votre amour pour la forme physique et votre style décontracté. Ce pull est facile à porter et à entretenir, et vous assurera un confort optimal peu importe ce que vous faites. Portez le pull NRV pour une allure décontractée et confortable à la fois en salle de sport et dans la vie de tous les jours."

    },
    {
      Id: 7,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png",
      Description: "Le pull NRV est la pièce parfaite pour les amateurs de musculation et pour les journées de détente. Conçu avec des matériaux doux et confortables, ce pull est idéal pour la musculation ou pour une utilisation quotidienne. L'impression NRV discrète mais élégante montre votre amour pour la forme physique et votre style décontracté. Ce pull est facile à porter et à entretenir, et vous assurera un confort optimal peu importe ce que vous faites. Portez le pull NRV pour une allure décontractée et confortable à la fois en salle de sport et dans la vie de tous les jours."

    },
    {
      Id: 8,
      Title: "Poutchi Nrv",
      Categorie: "Hoodies",
      Price: 39.99,
      Image: "../../../assets/images/nrv.png",
      SecImage: "../../../assets/images/gymbro.png",
      Description: "Le pull NRV est la pièce parfaite pour les amateurs de musculation et pour les journées de détente. Conçu avec des matériaux doux et confortables, ce pull est idéal pour la musculation ou pour une utilisation quotidienne. L'impression NRV discrète mais élégante montre votre amour pour la forme physique et votre style décontracté. Ce pull est facile à porter et à entretenir, et vous assurera un confort optimal peu importe ce que vous faites. Portez le pull NRV pour une allure décontractée et confortable à la fois en salle de sport et dans la vie de tous les jours."

    }]
  }

}
