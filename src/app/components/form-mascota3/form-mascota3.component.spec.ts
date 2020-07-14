import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMascota3Component } from './form-mascota3.component';

describe('FormMascota3Component', () => {
  let component: FormMascota3Component;
  let fixture: ComponentFixture<FormMascota3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMascota3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMascota3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
