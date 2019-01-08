import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLayoutComponent } from './after-layout.component';

describe('AfterLayoutComponent', () => {
  let component: AfterLayoutComponent;
  let fixture: ComponentFixture<AfterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
