import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableContainer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { setEmployeesData } from "./slice";
import { tableCellClasses } from "@mui/material/TableCell";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Employees = () => {
  const dispatch = useDispatch();
  const empData = useSelector((state) => state.employees);

  const userData = empData.employees;
  //console.log(userData);
  //console.log(empData);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#f2f7ff",
      color: theme.palette.common.black,
      height: "35px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  // const [employeeData, setEmployeeData] = useState([]);

  const navigate = useNavigate();

  const getEmployeeDetails = async () => {
    const response = await axios.get(
      "http://192.168.0.122:5000/api/v1/employee"
    );
    //console.log(response);
    const details = await response.data;
    // console.log(details);
    dispatch(setEmployeesData(details));
  };

  useEffect(() => {
    getEmployeeDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        display: "flex",

        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <Typography variant="h6">Employees List</Typography>
      <Grid sx={{ margin: "40px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "90vw" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Employee_Id</StyledTableCell>
                <StyledTableCell align="left">Employee_Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Role</StyledTableCell>
                <StyledTableCell align="left">Company name</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((row) => (
                <TableRow
                  key={row.employee_id}
                  onClick={() => navigate(`/employee/${row.employee_id}`)}
                  scope="row"
                  sx={{
                    cursor: "pointer",
                    outline: "none",
                    // backgroundColor: "#f2f7ff",
                  }}
                >
                  <TableCell
                    sx={{
                      height: "35px",
                    }}
                  >
                    {row.employee_id}
                  </TableCell>
                  <TableCell align="left">{row.full_name}</TableCell>
                  <TableCell align="left">{row.employee_email}</TableCell>
                  <TableCell align="left">{row.job_title}</TableCell>
                  <TableCell align="left">AapmorTechnologies</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default Employees;
