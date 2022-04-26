import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConsultoriaComponent } from './menu-consultoria.component';

describe('MenuConsultoriaComponent', () => {
  let component: MenuConsultoriaComponent;
  let fixture: ComponentFixture<MenuConsultoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConsultoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
