import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesPartnerComponent } from './cases-partner.component';

describe('CasesPartnerComponent', () => {
  let component: CasesPartnerComponent;
  let fixture: ComponentFixture<CasesPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesPartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
