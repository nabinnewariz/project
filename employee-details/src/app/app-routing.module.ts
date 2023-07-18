import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeTableDetailsComponent } from './employee-table-details/employee-table-details.component';

const routes: Routes = [{
  path: '',
  component: EmployeeHomeComponent,
}, {
  path: 'employee-form',
  component: EmployeeFormComponent,
}, {
  path: 'employee-table',
  component: EmployeeTableDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
