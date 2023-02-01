import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCoachingComponent } from './presentation-coaching.component';

describe('PresentationCoachingComponent', () => {
  let component: PresentationCoachingComponent;
  let fixture: ComponentFixture<PresentationCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationCoachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
