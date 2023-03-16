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
        PreviewImageSrc: "../../../assets/images/new-beginnings-text.png",
        Alt: "Be Patient",
        Title: "Be Patient"
      },
      {
        PreviewImageSrc: "../../../assets/images/presentation_transformation.jpg",
        Alt: "New beginnings",
        Title: "New beginnings"
      }
    ]

  }
}
