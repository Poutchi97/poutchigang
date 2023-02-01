import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitUniqueComponent } from './produit-unique.component';

describe('ProduitUniqueComponent', () => {
  let component: ProduitUniqueComponent;
  let fixture: ComponentFixture<ProduitUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitUniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
