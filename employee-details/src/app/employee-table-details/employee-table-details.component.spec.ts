import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableDetailsComponent } from './employee-table-details.component';

describe('EmployeeTableDetailsComponent', () => {
  let component: EmployeeTableDetailsComponent;
  let fixture: ComponentFixture<EmployeeTableDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTableDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeeTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
