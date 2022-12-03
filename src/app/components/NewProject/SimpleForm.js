import {
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";

const SimpleForm = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          <TextField
            type="text"
            name="username"
            id="standard-basic"
            value={username || ""}
            errorMessages={["this field is required"]}
            label="Username (Min length 4, Max length 9)"
            validators={[
              "required",
              "minStringLength: 4",
              "maxStringLength: 9",
            ]}
          />

          <TextField
            type="text"
            name="firstName"
            label="First Name"
            value={firstName || ""}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />

          <TextField
            type="email"
            name="email"
            label="Email"
            value={email || ""}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />

          <LocalizationProvider
            dateAdapter={AdapterDateFns}
          ></LocalizationProvider>

          <TextField
            sx={{ mb: 4 }}
            type="number"
            name="creditCard"
            label="Credit Card"
            value={creditCard || ""}
            errorMessages={["this field is required"]}
            validators={[
              "required",
              "minStringLength:16",
              "maxStringLength: 16",
            ]}
          />
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
          <TextField
            type="text"
            name="mobile"
            value={mobile || ""}
            label="Mobile Nubmer"
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            value={password || ""}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <RadioGroup row name="gender" sx={{ mb: 2 }} value={gender || ""}>
            <FormControlLabel
              value="Male"
              label="Male"
              labelPlacement="end"
              control={<Radio color="secondary" />}
            />

            <FormControlLabel
              value="Female"
              label="Female"
              labelPlacement="end"
              control={<Radio color="secondary" />}
            />

            <FormControlLabel
              value="Others"
              label="Others"
              labelPlacement="end"
              control={<Radio color="secondary" />}
            />
          </RadioGroup>

          <FormControlLabel
            control={<Checkbox />}
            label="I have read and agree to the terms of service."
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SimpleForm;
