import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseoptionComponent } from './caseoption.component';

describe('CaseoptionComponent', () => {
  let component: CaseoptionComponent;
  let fixture: ComponentFixture<CaseoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
