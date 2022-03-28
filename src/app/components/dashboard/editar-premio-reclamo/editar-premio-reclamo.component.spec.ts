import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPremioReclamoComponent } from './editar-premio-reclamo.component';

describe('EditarPremioReclamoComponent', () => {
  let component: EditarPremioReclamoComponent;
  let fixture: ComponentFixture<EditarPremioReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPremioReclamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPremioReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
