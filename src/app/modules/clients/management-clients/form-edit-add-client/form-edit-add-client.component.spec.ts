import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditAddClientComponent } from './form-edit-add-client.component';

describe('FormEditAddClientComponent', () => {
  let component: FormEditAddClientComponent;
  let fixture: ComponentFixture<FormEditAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditAddClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
