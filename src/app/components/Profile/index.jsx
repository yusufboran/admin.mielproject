import { Avatar, Button, Grid, Icon, styled } from "@mui/material";
import { Span } from "app/components/Typography";
import { dbUserUpdate } from "app/db/auth";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    dbUserUpdate(state);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { username, oldpassword, password, confirmPassword, email } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={3} md={3} sm={12} xs={12} sx={{ mt: 2 }}>
            <Avatar src="image" sx={{ width: 200, height: 200 }} />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="username"
              label="username"
              onChange={handleChange}
              value={username || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="email"
              name="email"
              label="Email"
              value={email || ""}
              onChange={handleChange}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
            <TextField
              name="oldpassword"
              type="password"
              label="Old Password"
              value={oldpassword || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              name="password"
              type="password"
              label="New Password"
              value={password || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              label="Confirm New Password"
              value={confirmPassword || ""}
              validators={["required", "isPasswordMatch"]}
              errorMessages={[
                "this field is required",
                "password didn't match",
              ]}
            />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
              </Button>

              <Button color="primary" variant="contained">
                <Icon>add</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>
                  New User
                </Span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
