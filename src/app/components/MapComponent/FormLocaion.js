import { Button, Grid, Icon, styled } from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  marginBottom: "16px",
}));

const FormLocaion = ({ func, editItem }) => {
  const [state, setState] = useState({ date: new Date() });

  const handleSubmit = () => {
    func(state);
  };

  useEffect(() => {
    function getItem() {
      if (editItem) setState(editItem);
    }
    getItem();
  }, []);

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { name, address, image, phone, location } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid justifyContent={"center"} container >
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              type="text"
              name="name"
              id="standard-basic"
              value={name || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Title"
              validators={["required", "minStringLength: 4"]}
            />

            <TextField
              fullWidth
              type="text"
              name="address"
              label="Address"
              onChange={handleChange}
              value={address || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              placeholder="05*********"
              type="text"
              name="phone"
              inputProps={{ maxLength: 11, minlength: 11 }}
              value={phone || ""}
              label="phone Number"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              fullWidth
              placeholder="41.07089461296516, 29.016993428037466"
              type="location"
              name="location"
              label="Location"
              value={location || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              fullWidth
              placeholder="https://www.example.com/image.jpg"
              sx={{ mb: 4 }}
              type="text"
              name="image"
              label="İmage Url"
              onChange={handleChange}
              value={image || ""}
              errorMessages={["this field is required"]}
              validators={["required"]}
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default FormLocaion;
