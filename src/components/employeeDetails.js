import React, { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Grid,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmployeeDetails = () => {
  const navigate = useNavigate();

  const [employeeData, setEmpbsId] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    employeeView();
    // eslint-disable-next-line
  }, []);

  const employeeView = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/employee/${id}`
    );
    // console.log(response);
    const singleemployee = response.data;
    setEmpbsId(singleemployee);
  };
  const x = employeeData.emergency_details;
  console.log(x);

  const { date_of_hire, date_of_birth, profile_image } = employeeData;
  const dateOfHire = new Date(date_of_hire);
  const dateOfBirth = new Date(date_of_birth);

  const dateObjectBirth = `${dateOfBirth.getDate()} ${dateOfBirth.toLocaleString(
    "default",
    {
      month: "short",
    }
  )}, ${dateOfBirth.getFullYear()}`;

  const dateObject = `${dateOfHire.getDate()} ${dateOfHire.toLocaleString(
    "default",
    {
      month: "short",
    }
  )}, ${dateOfHire.getFullYear()}`;

  return (
    <Grid sx={{ padding: "30px" }}>
      <Grid sx={{ display: "flex" }}>
        <Grid>
          <Box
            sx={{
              height: "20vh",
              width: "90vw",
              padding: "20px",
              backgroundColor: "#b7cef7",
              borderRadius: "9px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid sx={{ display: "flex" }} key={id}>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src={profile_image}
                sx={{
                  height: "120px",
                  width: "120px",
                  marginRight: "16px",
                  borderRadius: "5px",
                }}
              />
              <Box sx={{ marginBottom: "50px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", pb: "6px" }}>
                  {employeeData.full_name}
                </Typography>
                <Grid sx={{ display: "flex" }}>
                  <Typography variant="body" sx={{ width: "60px" }}>
                    Role{" "}
                  </Typography>
                  <Typography sx={{ marginRight: "15px" }}>:</Typography>
                  <Typography variant="span">
                    {employeeData.job_title}
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex" }}>
                  <Typography variant="body" sx={{ width: "60px" }}>
                    Email{" "}
                  </Typography>
                  <Typography sx={{ marginRight: "15px" }}>:</Typography>
                  <Typography variant="span">
                    {employeeData.employee_email}
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex" }}>
                  <Typography variant="body" sx={{ width: "60px" }}>
                    PH.No{" "}
                  </Typography>
                  <Typography sx={{ marginRight: "15px" }}>:</Typography>
                  <Typography variant="span">
                    {employeeData.phone_number}
                  </Typography>
                </Grid>
              </Box>
            </Grid>

            <Grid>
              <IconButton
                onClick={() => navigate("192.168.0.122:81")}
                sx={{ color: "white", backgroundColor: "black" }}
                aria-label="add an alarm"
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <ArrowBackOutlinedIcon
          sx={{
            marginTop: "10px",
            height: "40px",
            width: "23px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />

        <Grid sx={{ marginLeft: "12px", marginTop: "14px", width: "95%" }}>
          <Box sx={{ marginTop: "6px" }}>
            <Typography variant="body" sx={{ fontWeight: "bold" }}>
              Basic Info
            </Typography>
            <Divider variant="inset" />
          </Box>
          <Grid
            mt={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Grid sx={{ display: "flex" }}>
              <Typography variant="span" sx={{ width: "200px" }}>
                EmployeeId{" "}
              </Typography>
              <Typography mr={1}>:</Typography>

              <Typography variant="span">{employeeData.employee_id}</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Gender{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span"> {employeeData.gender}</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                DOB{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span">{dateObjectBirth}</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                DateOfHire{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span">{dateObject}</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Marital status{" "}
              </Typography>
              <Typography mr={1}>:</Typography>

              <Typography variant="span">
                {employeeData.marital_status}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Employment Type{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span"> Fulltime</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Laptop{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span">{employeeData.laptop_name}</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Laptop Serial No{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span">
                {employeeData.laptop_serial_no}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Department{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span"> Information Technology</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Manager{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">{employeeData.supervisor}</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Work Location{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span">
                {employeeData.work_location}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Blood Group{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span"> A+</Typography>
            </Grid>
            <Grid sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Address{" "}
              </Typography>
              <Typography mr={1}>:</Typography>
              <Typography variant="span">{employeeData.address}</Typography>
            </Grid>
            <Grid container sx={{ display: "flex" }} mt={1}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Emergency Details{" "}
              </Typography>
              {employeeData.emergency_details
                ? employeeData.emergency_details.map((each, index) => (
                    <Grid container key={index} mt={1}>
                      <Typography
                        variant="body"
                        sx={{ width: "180px", marginLeft: "100px" }}
                      >
                        Name : {each.name}
                      </Typography>
                      <Typography variant="body" sx={{ width: "250px" }}>
                        Phone Number : {each.phoneNo}
                      </Typography>
                      <Typography variant="body">
                        Relation : {each.relation}
                      </Typography>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployeeDetails;
