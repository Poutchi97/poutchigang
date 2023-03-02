import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeroulementCoachingComponent } from './deroulement-coaching.component';

describe('DeroulementCoachingComponent', () => {
  let component: DeroulementCoachingComponent;
  let fixture: ComponentFixture<DeroulementCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeroulementCoachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeroulementCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
