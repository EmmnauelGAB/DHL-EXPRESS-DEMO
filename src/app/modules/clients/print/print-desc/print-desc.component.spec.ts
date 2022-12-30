import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDescComponent } from './print-desc.component';

describe('PrintDescComponent', () => {
  let component: PrintDescComponent;
  let fixture: ComponentFixture<PrintDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
