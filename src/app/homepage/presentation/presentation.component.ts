import { Component, OnInit } from '@angular/core';
import { ISlider } from 'src/app/interfaces/islider';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  public sliderImageSrc: ISlider[] = this._sliderImage.sliderImages;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  constructor(
    private _sliderImage: SliderService
  ) { }

  ngOnInit(): void {
  }
}
