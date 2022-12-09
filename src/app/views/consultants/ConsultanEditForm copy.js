import React, { useState, useEffect } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import MobilePhone from "../../components/MobilePhone";
import DropFileInput from "app/components/DropFileInput/DropFileInput";
import { useLocation, useNavigate } from "react-router-dom";
import {
  updateConsultansId,
  getConsultansId,
  getFile,
} from "../../../firebase";
import FileItem from "app/components/DropFileInput/FileItem";

export default function ConsultanEditForm() {
  const location = useLocation();
  const consultantsId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    getConsultansId(
      consultantsId,
      setFirstName,
      setLastName,
      setEmail,
      setPhoneNumber,
      setStartDate,
      setBirthday,
      setFileList
    );
  };
  const handleSubmit = () => {
    const item = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      startDate: startDate,
      birthday: birthday,
    };

    console.log(consultantsId, item);
    navigate("/consultants");
  };

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [fileList, setFileList] = useState([]);
  console.log(fileList);
  return (
    <Container component="main" maxWidth="xs">
      {consultantsId}
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                required
                fullWidth
                label={firstName ? null : "first name"}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                fullWidth
                id="lastName"
                label={firstName ? null : "lastName"}
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label={firstName ? null : "email"}
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                fullWidth
                id="Phone"
                label={firstName ? null : "Phone"}
                name="phoneNumber"
                autoComplete="phoneNumber"
              />
            </Grid>

            {/* <Grid item xs={12}>
              <MobilePhone
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber({ phone })}
                label={"Mobile Phone"}
                req={true}
                helperText={""}
                error={true}
                isSelect={false}
              />
            </Grid> */}
            <Grid item xs={6} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start time"
                  value={startDate}
                  format="DD-MM-YYYY"
                  onChange={(newValue) => {
                    setStartDate(newValue.format("DD-MM-YYYY"));
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Birthday"
                  value={birthday}
                  onChange={(newValue) => {
                    setBirthday(newValue.format("DD-MM-YYYY"));
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          {fileList === null ? (
            <DropFileInput fileList={fileList} setFileList={setFileList} />
          ) : (
            {fileList}
           // <FileItem item={fileList.split("/")[2]} />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
