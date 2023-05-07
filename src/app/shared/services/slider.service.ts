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
        PreviewImageSrc: [
          {
            'id': 0, 'src': `${this.imagesSrc}gymbro.png`
          }
        ],
        Alt: "tshirt",
        Title: "tshirt"
      }, {
        Id: 2,
        PreviewImageSrc: [
          { 'id': 0, 'src': `${this.imagesSrc}Poutchicasquette.png` },
          { 'id': 1, 'src': `${this.imagesSrc}casquette_dos.png` },
          { 'id': 2, 'src': `${this.imagesSrc}casquette_droite.png` },
          { 'id': 3, 'src': `${this.imagesSrc}casquette_gauche.png` },
          { 'id': 4, 'src': `${this.imagesSrc}casquette_haut.png` },
        ],
        Alt: "casquette",
        Title: "casquette"
      }
    ]

  }


}
