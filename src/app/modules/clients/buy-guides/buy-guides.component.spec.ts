import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGuidesComponent } from './buy-guides.component';

describe('BuyGuidesComponent', () => {
  let component: BuyGuidesComponent;
  let fixture: ComponentFixture<BuyGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGuidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
