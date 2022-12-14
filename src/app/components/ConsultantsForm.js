import { Button, Grid, Icon, styled } from "@mui/material";
import DropFileInput from "app/components/DropFileInput/DropFileInput";
import { Span } from "app/components/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getConsultansId } from "../firabase";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const ConsultantsForm = ({ func, id }) => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    if (id) {
      console.log("useEffect", id);
      getItems();
    }
  }, []);

  const getItems = () => {
    getConsultansId(id, setState, setFile);
  };

  const handleSubmit = () => {
    const url = "consultans/personImage/" + firstName + lastName + Date.now();
    func(file, url, state);
    navigate("/consultants");
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleChangeFile = (event) => {
    setState({ ...state, path: null });
    setFile(event);
  };
  const navigate = useNavigate();
  const { firstName, lastName, phoneNumber, email } = state;
  const [file, setFile] = React.useState([]);

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => console.log}>
        <Grid justifyContent={"center"} container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="firstName"
              label="First Name"
              inputProps={{ minlength: 3 }}
              onChange={handleChange}
              value={firstName || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="text"
              name="lastName"
              label="Last Name"
              inputProps={{ minlength: 3 }}
              onChange={handleChange}
              value={lastName || ""}
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
              type="text"
              name="phoneNumber"
              inputProps={{ maxLength: 11, minlength: 11 }}
              value={phoneNumber || ""}
              label="Mobile Number"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <DropFileInput
              fileList={file}
              setFileList={handleChangeFile}
              singleFile={true}
            />
            {}
          </Grid>
        </Grid>
        <Grid justifyContent={"end"} container spacing={6}>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
          </Button>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

export default ConsultantsForm;
