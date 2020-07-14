import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMascota1Component } from './form-mascota1.component';

describe('FormMascota1Component', () => {
  let component: FormMascota1Component;
  let fixture: ComponentFixture<FormMascota1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMascota1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMascota1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
