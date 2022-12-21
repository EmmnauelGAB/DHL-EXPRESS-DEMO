import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFooComponent } from './main-foo.component';

describe('MainFooComponent', () => {
  let component: MainFooComponent;
  let fixture: ComponentFixture<MainFooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
