import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBlocComponent } from './profile-bloc.component';

describe('ProfileBlocComponent', () => {
  let component: ProfileBlocComponent;
  let fixture: ComponentFixture<ProfileBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBlocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
