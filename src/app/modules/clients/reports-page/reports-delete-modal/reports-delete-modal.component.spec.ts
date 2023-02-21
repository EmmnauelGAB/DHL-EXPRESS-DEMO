import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsDeleteModalComponent } from './reports-delete-modal.component';

describe('ReportsDeleteModalComponent', () => {
  let component: ReportsDeleteModalComponent;
  let fixture: ComponentFixture<ReportsDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
