import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComercialComponent } from './menu-comercial.component';

describe('MenuComercialComponent', () => {
  let component: MenuComercialComponent;
  let fixture: ComponentFixture<MenuComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
