import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Store } from '@ngrx/store';
import { empFormSelect } from '../store/employee.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-table-details',
  templateUrl: './employee-table-details.component.html',
  styleUrls: ['./employee-table-details.component.scss']
})
export class EmployeeTableDetailsComponent implements OnInit{
  
  displayedColumns: string[] = ['firstName', 'lastName', 'empID', 'joinYear', 'designation', 'experience', 'empSkills', 'empSalary'];
  dataSource:any = [];
    // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  empSelector$: Observable<any>;
  constructor( private service: EmployeeService, private store : Store) {
    this.empSelector$ = store.select(empFormSelect);
  }

  ngOnInit(): void {
    // this.service.empFormValue.subscribe(data=> {
    //   console.log(data,"data--->")
    // });
    this.empSelector$.subscribe(data=> {
      this.dataSource.push(data?.updatedstate?.payload);
      console.log(data?.updatedstate?.payload, "result")
    });
    console.log(this.dataSource,"dataSource")
  }
}
