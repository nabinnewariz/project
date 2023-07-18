import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Store } from '@ngrx/store';
import { employeeFormSuccess } from '../store/employee.action';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employeForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    empID: ['', Validators.required],
    joinYear: ['', Validators.required],
    designation: ['', Validators.required],
    experience: ['', Validators.required],
    empSkills: ['', Validators.required],
    empSalary: ['', Validators.required],
  });

  skills = [
    'html',
    'css',
    'javascript',
    'scss',
    'jquery',
    'angular',
    'react',
    'nodejs',
    'mongodb',
    'express',
  ];
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public service: EmployeeService,
    private store: Store
  ) {}

  ngOnInit(): void {
    console.log(this.employeForm.controls['firstName'].value, 'form ');
  }
  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.skills.push(value);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }
  // remove(fruit: string): void {
  //   const index = this.skills.indexOf(fruit);

  //   if (index >= 0) {
  //     this.skills.splice(index, 1);

  //     // this.announcer.announce(`Removed ${fruit}`);
  //   }
  // }
  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.fruits.push(event.option.viewValue);
  //   this.fruitInput.nativeElement.value = '';
  //   this.fruitCtrl.setValue(null);
  // }

  onSubmit() {
    console.log(this.employeForm.value, 'form ');
    this.submitted = true;
    this.store.dispatch(
      employeeFormSuccess({ payload: this.employeForm.value })
    );
    this.service.setEmpTable(this.employeForm.value);
  }
}
