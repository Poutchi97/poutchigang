import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  providers: [DatePipe]
})
export class SuccessComponent {
  public produits!: any;
  public date: any = new Date();
  constructor(
    private _storage: LocalstorageService,
    private datePipe: DatePipe
  ) {

    this.date = this.datePipe.transform(this.date, 'dd-MM-yyyy à hh:m a');
  }

  ngOnInit() {
    this.produits = this._storage.getProduits()

  }
}
