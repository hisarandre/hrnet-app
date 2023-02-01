import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: [
    {
      firstname: "Jane",
      lastname: "Doe",
      birthday: "1992-05-18",
      startdate: "2022-01-17",
      street: "4449 Hamilton Drive",
      city: "Annapolis",
      state: "ML",
      zipcode: "21401",
      department: "Engineering",
    },
  ],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employee.push(action.payload);
    },
  },
});

export const employeeSelector = (state) => state.employee;
export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
