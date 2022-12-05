import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import MobilePhone from "../../components/MobilePhone";
import DropFileInput from "app/components/DropFileInput/DropFileInput";
import { consultansAdd } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export default function ConsultanForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    consultansAdd(
      firstName,
      lastName,
      email,
      phoneNumber,
      startDate,
      birthday,
      imgUrl
    );
    navigate("/consultants");
  };

  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const [startDate, setStartDate] = React.useState(null);
  const [birthday, setBirthday] = React.useState(null);
  const [imgUrl, setImgUrl] = React.useState(null);

  return (
    <Container component="main" maxWidth="xs">
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
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
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
                label="Last Name"
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
                label="Email Address"
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
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                required
                fullWidth
                id="İmage Url*"
                label="İmage Url"
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
          <DropFileInput />
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
