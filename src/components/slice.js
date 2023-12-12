import { createSlice } from "@reduxjs/toolkit";

const employeesData = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {
    setEmployeesData: (state, action) => {
      state.employees = action.payload;
      //console.log(action.payload);
    },
  },
});
export const { setEmployeesData } = employeesData.actions;
export default employeesData.reducer;
