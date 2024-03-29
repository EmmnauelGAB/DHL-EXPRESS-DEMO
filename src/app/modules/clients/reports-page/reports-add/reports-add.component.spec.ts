import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAddComponent } from './reports-add.component';

describe('ReportsAddComponent', () => {
  let component: ReportsAddComponent;
  let fixture: ComponentFixture<ReportsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
