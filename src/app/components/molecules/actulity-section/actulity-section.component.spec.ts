import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActulitySectionComponent } from './actulity-section.component';

describe('ActulitySectionComponent', () => {
  let component: ActulitySectionComponent;
  let fixture: ComponentFixture<ActulitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActulitySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActulitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
