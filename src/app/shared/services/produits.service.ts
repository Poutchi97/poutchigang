import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  produitInfos: any
  // url: string = "http://localhost:4200/backend/catalogue";
  constructor(
    private http: HttpClient
  ) { }

  // public get(): Observable<any> {
  // return this.http.get(this.url);
  // }


}
