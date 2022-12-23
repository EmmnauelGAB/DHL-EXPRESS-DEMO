import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditGuideComponent } from './form-edit-guide.component';

describe('FormEditGuideComponent', () => {
  let component: FormEditGuideComponent;
  let fixture: ComponentFixture<FormEditGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
