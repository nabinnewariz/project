import { initialState } from "./employee.state";
import { employeeFormSuccess } from "./employee.action";
import { createReducer, on } from "@ngrx/store";


export const employeeFormReducer = createReducer(initialState, on(employeeFormSuccess, (state, updatedstate) => {
    console.log(state,"state", updatedstate, "empDet")

    return {
        ...state, updatedstate
    }
}))