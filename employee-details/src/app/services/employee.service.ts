import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empFormValue = new Subject();
  constructor() { }

  setEmpTable(val:any) {
    // this.empFormValue.next(val);
  }

}
