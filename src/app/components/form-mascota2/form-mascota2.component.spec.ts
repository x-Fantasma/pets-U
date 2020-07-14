import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMascota2Component } from './form-mascota2.component';

describe('FormMascota2Component', () => {
  let component: FormMascota2Component;
  let fixture: ComponentFixture<FormMascota2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMascota2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMascota2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
