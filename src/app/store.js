import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employee/EmployeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
