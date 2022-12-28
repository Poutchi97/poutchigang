import { Component, OnInit } from '@angular/core';
import { ICatalogue } from 'src/app/interfaces/icatalogue';

@Component({
  selector: 'app-catalogue-homepage',
  templateUrl: './catalogue-homepage.component.html',
  styleUrls: ['./catalogue-homepage.component.scss']
})
export class CatalogueHomepageComponent implements OnInit {
  public catalogue!: ICatalogue[];

  constructor() {
    this.catalogue = [{
      Id: 1,
      Title: "Toto",
      Description: "Toto à la plage",
      Price: 12,
    },
    {
      Id: 2,
      Title: "Tata",
      Description: "Tata à la plage",
      Price: 2,
    },
    {
      Id: 3,
      Title: "Titi",
      Description: "Titi à la plage",
      Price: 3,
    }]
  }

  ngOnInit(): void {
  }

}
