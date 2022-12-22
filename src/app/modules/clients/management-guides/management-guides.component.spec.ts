import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementGuidesComponent } from './management-guides.component';

describe('ManagementGuidesComponent', () => {
  let component: ManagementGuidesComponent;
  let fixture: ComponentFixture<ManagementGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementGuidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
