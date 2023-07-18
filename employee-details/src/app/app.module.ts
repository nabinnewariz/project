import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableDetailsComponent } from './employee-table-details/employee-table-details.component';
import { EmployeeGraphDetailsComponent } from './employee-graph-details/employee-graph-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { employeeFormReducer } from './store/employee.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeTableDetailsComponent,
    EmployeeGraphDetailsComponent,
    EmployeeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule ,
    FormsModule,
    MatChipsModule,
    MatTableModule, 
    NgIf, 
    NgFor,
    StoreModule.forRoot({employeeFormReducer}), 
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  exports: [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatTableModule, 
    NgIf, 
    NgFor    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
