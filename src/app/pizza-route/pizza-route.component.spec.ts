import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaRouteComponent } from './pizza-route.component';

describe('PizzaRouteComponent', () => {
  let component: PizzaRouteComponent;
  let fixture: ComponentFixture<PizzaRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
