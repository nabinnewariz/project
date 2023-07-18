import { createAction, props } from "@ngrx/store";
import { employeDetails } from "./employee.model";

export const employeeFormSuccess = createAction('submitForm', props<{ payload: employeDetails }>());

// export const employeeDelete = createAction('deleteEmployee', props<employeDetails>);

// export const employeeEdit = createAction('EditEmployee', props<employeDetails>);