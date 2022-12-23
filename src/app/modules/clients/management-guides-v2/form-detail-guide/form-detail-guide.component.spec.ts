import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailGuideComponent } from './form-detail-guide.component';

describe('FormDetailGuideComponent', () => {
  let component: FormDetailGuideComponent;
  let fixture: ComponentFixture<FormDetailGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDetailGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
