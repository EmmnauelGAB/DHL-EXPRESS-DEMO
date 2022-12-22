import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailClientComponent } from './form-detail-client.component';

describe('FormDetailClientComponent', () => {
  let component: FormDetailClientComponent;
  let fixture: ComponentFixture<FormDetailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
