import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueHomepageComponent } from './catalogue-homepage.component';

describe('CatalogueHomepageComponent', () => {
  let component: CatalogueHomepageComponent;
  let fixture: ComponentFixture<CatalogueHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
