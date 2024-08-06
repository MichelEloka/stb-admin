import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgubiaSectionComponent } from './burgubia-section.component';

describe('BurgubiaSectionComponent', () => {
  let component: BurgubiaSectionComponent;
  let fixture: ComponentFixture<BurgubiaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgubiaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgubiaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
