import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamarPremioComponent } from './reclamar-premio.component';

describe('ReclamarPremioComponent', () => {
  let component: ReclamarPremioComponent;
  let fixture: ComponentFixture<ReclamarPremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamarPremioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamarPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
