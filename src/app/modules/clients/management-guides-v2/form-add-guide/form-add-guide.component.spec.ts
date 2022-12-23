import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddGuideComponent } from './form-add-guide.component';

describe('FormAddGuideComponent', () => {
  let component: FormAddGuideComponent;
  let fixture: ComponentFixture<FormAddGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
