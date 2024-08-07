import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilStateComponent } from './profil-state.component';

describe('ProfilStateComponent', () => {
  let component: ProfilStateComponent;
  let fixture: ComponentFixture<ProfilStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
