import { Injectable } from '@angular/core';
import { ISlider } from 'src/app/interfaces/islider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  public sliderImages!: ISlider[];
  public sliderImagesUnique: ISlider[] = [];
  private imagesSrc: string = "../../../assets/images/";
  constructor() {

    this.sliderImages = [
      {
        Id: -1,
        PreviewImageSrc: ["../../../assets/images/poutchi_gang.jpg"],
        Alt: "Le gang",
        Title: "Poutchi gang"
      },
      // {
      //   PreviewImageSrc: "../../../assets/images/nico_gang.jpg",
      //   Alt: "Be Patient",
      //   Title: "Be Patient"
      // },
      // {
      //   PreviewImageSrc: "../../../assets/images/presentation_transformation.jpg",
      //   Alt: "New beginnings",
      //   Title: "New beginnings"
      // }
    ];

    this.sliderImagesUnique = [
      {
        Id: 1,
        PreviewImageSrc: ["../../../assets/images/gymbro.png"],
        Alt: "tshirt",
        Title: "tshirt"
      }, {
        Id: 2,
        PreviewImageSrc: [
          `${this.imagesSrc}Poutchicasquette.png`,
          `${this.imagesSrc}casquette_dos.png`,
          `${this.imagesSrc}casquette_droite.png`,
          `${this.imagesSrc}casquette_gauche.png`,
          `${this.imagesSrc}casquette_haut.png`],
        Alt: "casquette",
        Title: "casquette"
      }
    ]

  }


}
