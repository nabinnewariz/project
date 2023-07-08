import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGraphDetailsComponent } from './employee-graph-details.component';

describe('EmployeeGraphDetailsComponent', () => {
  let component: EmployeeGraphDetailsComponent;
  let fixture: ComponentFixture<EmployeeGraphDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeGraphDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeeGraphDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
