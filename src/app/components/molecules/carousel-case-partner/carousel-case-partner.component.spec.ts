import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCasePartnerComponent } from './carousel-case-partner.component';

describe('CarouselCasePartnerComponent', () => {
  let component: CarouselCasePartnerComponent;
  let fixture: ComponentFixture<CarouselCasePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCasePartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCasePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
