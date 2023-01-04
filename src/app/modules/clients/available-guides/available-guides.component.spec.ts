import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableGuidesComponent } from './available-guides.component';

describe('AvailableGuidesComponent', () => {
  let component: AvailableGuidesComponent;
  let fixture: ComponentFixture<AvailableGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableGuidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
