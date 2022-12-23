import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementGuidesV2Component } from './management-guides-v2.component';

describe('ManagementGuidesV2Component', () => {
  let component: ManagementGuidesV2Component;
  let fixture: ComponentFixture<ManagementGuidesV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementGuidesV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementGuidesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
