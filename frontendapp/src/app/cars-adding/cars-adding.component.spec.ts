import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAddingComponent } from './cars-adding.component';

describe('CarsAddingComponent', () => {
  let component: CarsAddingComponent;
  let fixture: ComponentFixture<CarsAddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsAddingComponent]
    });
    fixture = TestBed.createComponent(CarsAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
