import { configureStore } from "@reduxjs/toolkit";

import employeesData from "./slice";

const store = configureStore({
  reducer: {
    employees: employeesData,
  },
});
export default store;
