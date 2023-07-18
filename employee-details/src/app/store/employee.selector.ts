import { createFeatureSelector, createSelector } from "@ngrx/store";
import { employeDetails } from "./employee.model";

export const empFormSelect = createSelector(
    createFeatureSelector<employeDetails>('employeeFormReducer'), state => {
        console.log(state,"state")
        return {
            ...state
            // firstName: state.firstName,
            // lastName: state.lastName,
            // empID: state.empID,
            // joinYear: state.joinYear,
            // designation: state.designation,
            // experience: state.experience,
            // empSkills: state.empSkills,
            // empSalary: state.empSalary
        }
    }
)