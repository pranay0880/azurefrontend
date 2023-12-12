import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Employees from "./components/employees";

import EmployeeDetails from "./components/employeeDetails";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Employees />} />
      <Route exact path="/employee/:id" element={<EmployeeDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
