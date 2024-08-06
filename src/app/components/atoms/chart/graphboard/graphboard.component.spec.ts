import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphboardComponent } from './graphboard.component';

describe('GraphboardComponent', () => {
  let component: GraphboardComponent;
  let fixture: ComponentFixture<GraphboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
