import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityShareListComponent } from './equity-share-list.component';

describe('EquityShareListComponent', () => {
  let component: EquityShareListComponent;
  let fixture: ComponentFixture<EquityShareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityShareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
