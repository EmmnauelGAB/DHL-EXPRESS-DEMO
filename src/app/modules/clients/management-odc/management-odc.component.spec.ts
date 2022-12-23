import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementOdcComponent } from './management-odc.component';

describe('ManagementOdcComponent', () => {
  let component: ManagementOdcComponent;
  let fixture: ComponentFixture<ManagementOdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementOdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementOdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
