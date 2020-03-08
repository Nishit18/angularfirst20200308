import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityShareComponent } from './equity-share.component';

describe('EquityShareComponent', () => {
  let component: EquityShareComponent;
  let fixture: ComponentFixture<EquityShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
