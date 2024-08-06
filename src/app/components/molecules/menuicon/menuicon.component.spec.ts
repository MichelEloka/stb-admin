import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuiconComponent } from './menuicon.component';

describe('MenuiconComponent', () => {
  let component: MenuiconComponent;
  let fixture: ComponentFixture<MenuiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuiconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
