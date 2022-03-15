import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPremiosComponent } from './list-premios.component';

describe('ListPremiosComponent', () => {
  let component: ListPremiosComponent;
  let fixture: ComponentFixture<ListPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPremiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
