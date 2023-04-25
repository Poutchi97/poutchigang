import { Injectable } from '@angular/core';
import { ISlider } from 'src/app/interfaces/islider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  public sliderImages!: ISlider[];
  constructor() {

    this.sliderImages = [
      {
        PreviewImageSrc: "../../../assets/images/poutchi_gang.jpg",
        Alt: "Le gang",
        Title: "Poutchi gang"
      },
      // {
      //   PreviewImageSrc: "../../../assets/images/nico_gang.jpg",
      //   Alt: "Be Patient",
      //   Title: "Be Patient"
      // },
      {
        PreviewImageSrc: "../../../assets/images/presentation_transformation.jpg",
        Alt: "New beginnings",
        Title: "New beginnings"
      }
    ]

  }
}
