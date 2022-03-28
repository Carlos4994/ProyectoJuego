import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPremiosReclamadosComponent } from './lista-premios-reclamados.component';

describe('ListaPremiosReclamadosComponent', () => {
  let component: ListaPremiosReclamadosComponent;
  let fixture: ComponentFixture<ListaPremiosReclamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPremiosReclamadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPremiosReclamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
