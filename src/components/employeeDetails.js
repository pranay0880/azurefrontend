import React from "react";
import btoa from "btoa-lite";
import { encode } from "base-64";
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

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const empDetails = useSelector((state) => state.employees);
  const empployeeDetailsA = empDetails.employees;
  //console.log(empployeeDetailsA);

  const employeeDatas = empployeeDetailsA.filter(
    (emp) => emp.employee_id === id
  );

  var image = "";

  const employeeData = employeeDatas[0];

  const { date_of_hire, date_of_birth, profile_image } = employeeData;
  //console.log(profile_image, profile_image.data, profile_image.data.length);

  const bufferData = { type: "Buffer", data: [profile_image] };
  const dataArray = [profile_image.data];

  // Convert the Buffer object or numeric array to a Uint8Array
  const uint8ArrayFromBuffer = new Uint8Array(bufferData.data);
  const uint8ArrayFromArray = new Uint8Array(dataArray);
  console.log(uint8ArrayFromBuffer);

  // Convert the Uint8Array to a base64-encoded string
  const base64FromBuffer = btoa(
    String.fromCharCode.apply(null, uint8ArrayFromBuffer)
  );
  const base64FromArray = btoa(
    String.fromCharCode.apply(null, uint8ArrayFromArray)
  );

  // Display or use the base64-encoded string
  // console.log(base64FromBuffer);
  // console.log(base64FromArray);

  const convertBufferToImage = () => {
    if (uint8ArrayFromBuffer.length > 0) {
      const uint8Array = new Uint8Array(profile_image);
      console.log(uint8Array);
      // Convert Uint8Array to Base64
      const base64Image = btoa(String.fromCharCode.apply(null, uint8Array));
      console.log(base64Image);

      //Set the Base64 string as the image source
      image = `data:image/png;base64,${base64Image}`;
    } else {
      console.log("Buffer is empty or undefined.");
    }
  };
  convertBufferToImage();

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
    <Grid sx={{ padding: "30px", fontFamily: "Cambria" }}>
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
            <Grid sx={{ display: "flex" }}>
              <Avatar
                src={base64FromBuffer}
                sx={{
                  height: "110px",
                  width: "100px",
                  marginRight: "20px",
                  borderRadius: "10px",
                }}
                alt="profileImage"
                variant="square"
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
              <Typography sx={{ marginRight: "15px" }}>:</Typography>

              <Typography variant="span">{employeeData.employee_id}</Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Gender{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span"> {employeeData.gender}</Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                DOB{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">{dateObjectBirth}</Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                DateOfHire{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">{dateObject}</Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Marital status{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>

              <Typography variant="span">
                {employeeData.marital_status}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Employment Type{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span"> Fulltime</Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Laptop{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">{employeeData.laptop_name}</Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Laptop Serial No{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">
                {employeeData.laptop_serial_no}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Department{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span"> Information Technology</Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Manager{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">{employeeData.supervisor}</Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Work Location{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">
                {employeeData.work_location}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Blood Group{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span"> A+</Typography>
            </Grid>

            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Emergency Person{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">
                {employeeData.emergency_contact_name}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Emergency Relation{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">
                {employeeData.emergency_relation}
              </Typography>
            </Grid>

            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Emergency PhoneNumber{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span">
                {employeeData.emergency_phone_number}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "6px" }}>
              <Typography variant="body" sx={{ width: "200px" }}>
                Address{" "}
              </Typography>
              <Typography sx={{ marginRight: "15px" }}>:</Typography>
              <Typography variant="span" sx={{ width: "200px" }}>
                {employeeData.address}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployeeDetails;
