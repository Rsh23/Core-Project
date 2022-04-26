import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGerneciaComponent } from './menu-gernecia.component';

describe('MenuGerneciaComponent', () => {
  let component: MenuGerneciaComponent;
  let fixture: ComponentFixture<MenuGerneciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGerneciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGerneciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
